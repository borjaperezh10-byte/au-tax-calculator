'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  computeTracker,
  INDUSTRY_LABELS,
  postcodeVerdict,
  type Industry,
  type Job,
  type Settings,
  type WorkMode,
} from '@/lib/specified-work';
import { POSTCODE_DATA_REVIEWED } from '@/lib/specified-work-postcodes';

const STORAGE_KEY = 'auit-specified-work-v1';

const OFFICIAL_417 =
  'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work';
const OFFICIAL_462 =
  'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work';

function prettyDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function newJob(): Job {
  return {
    id: Math.random().toString(36).slice(2, 10),
    employer: '',
    abn: '',
    industry: 'plant-animal',
    postcode: '',
    start: '',
    end: '',
    mode: 'full-time',
    daysPerFortnight: 5,
    fullTimeDaysPerFortnight: 10,
    unpaidDays: 0,
    volunteerDaysWorked: 0,
  };
}

const DEFAULT_SETTINGS: Settings = { subclass: '417', target: 88, ukPassport: false, visaExpiry: '' };

interface Saved {
  settings: Settings;
  jobs: Job[];
}

const inputCls =
  'w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
const labelCls = 'text-xs font-medium text-slate-600 dark:text-slate-300';

export default function SpecifiedWorkTracker() {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [jobs, setJobs] = useState<Job[]>([newJob()]);
  const [loaded, setLoaded] = useState(false);
  const [storageOk, setStorageOk] = useState(true);
  const fileRef = useRef<HTMLInputElement>(null);

  // Restore saved progress (this browser only). Deferred to a callback so the
  // first render matches the statically generated HTML.
  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const saved = JSON.parse(raw) as Saved;
          if (saved.settings) setSettings({ ...DEFAULT_SETTINGS, ...saved.settings });
          if (Array.isArray(saved.jobs) && saved.jobs.length) setJobs(saved.jobs.map(j => ({ ...newJob(), ...j })));
        }
      } catch {
        setStorageOk(false);
      }
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const t = window.setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ settings, jobs }));
      } catch {
        setStorageOk(false);
      }
    }, 300);
    return () => window.clearTimeout(t);
  }, [settings, jobs, loaded]);

  const result = useMemo(() => computeTracker(settings, jobs, todayISO()), [settings, jobs]);
  const pct = Math.min((result.total / settings.target) * 100, 100);
  const official = settings.subclass === '417' ? OFFICIAL_417 : OFFICIAL_462;

  function updateJob(id: string, patch: Partial<Job>) {
    setJobs(js => js.map(j => (j.id === id ? { ...j, ...patch } : j)));
  }

  function exportJSON() {
    const blob = new Blob([JSON.stringify({ settings, jobs }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `specified-work-${todayISO()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function importJSON(file: File) {
    file
      .text()
      .then(text => {
        const saved = JSON.parse(text) as Saved;
        if (saved.settings) setSettings({ ...DEFAULT_SETTINGS, ...saved.settings });
        if (Array.isArray(saved.jobs)) setJobs(saved.jobs.map(j => ({ ...newJob(), ...j })));
      })
      .catch(() => alert('That file could not be read. Use a file exported from this tracker.'));
  }

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6 space-y-6">
      {/* Settings */}
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className={labelCls}>Your visa</span>
          <select
            className={`${inputCls} mt-1`}
            value={settings.subclass}
            onChange={e => setSettings(s => ({ ...s, subclass: e.target.value as Settings['subclass'] }))}
          >
            <option value="417">Working Holiday (subclass 417)</option>
            <option value="462">Work and Holiday (subclass 462)</option>
          </select>
        </label>
        <label className="block">
          <span className={labelCls}>Working towards</span>
          <select
            className={`${inputCls} mt-1`}
            value={settings.target}
            onChange={e => setSettings(s => ({ ...s, target: Number(e.target.value) as Settings['target'] }))}
          >
            <option value={88}>Second visa — 88 days</option>
            <option value={179}>Third visa — 179 days</option>
          </select>
        </label>
        <label className="block">
          <span className={labelCls}>Visa expiry date <span className="text-slate-400 font-normal">(optional)</span></span>
          <input
            type="date"
            className={`${inputCls} mt-1`}
            value={settings.visaExpiry}
            onChange={e => setSettings(s => ({ ...s, visaExpiry: e.target.value }))}
          />
        </label>
        {settings.subclass === '417' && (
          <label className="flex items-center gap-2 sm:mt-6">
            <input
              type="checkbox"
              checked={settings.ukPassport}
              onChange={e => setSettings(s => ({ ...s, ukPassport: e.target.checked }))}
            />
            <span className="text-sm text-slate-700 dark:text-slate-300">I&rsquo;m applying with a UK passport</span>
          </label>
        )}
      </div>

      {/* Progress */}
      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
        {result.exempt ? (
          <p className="text-sm text-blue-900 dark:text-blue-100">
            <strong>You don&rsquo;t need specified work.</strong> UK passport holders applying for a second or
            third subclass 417 visa from 1 July 2024 are exempt.
          </p>
        ) : (
          <>
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <p className="font-mono font-bold text-2xl text-blue-900 dark:text-blue-100 tabular-nums">
                {result.total} <span className="text-base font-normal">/ {settings.target} days</span>
              </p>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {result.remaining > 0 ? `${result.remaining} days to go` : 'Target reached'}
              </p>
            </div>
            <div className="h-2.5 bg-blue-100 dark:bg-blue-900 rounded-full mt-3 overflow-hidden" aria-hidden="true">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: `${pct}%` }} />
            </div>
            {result.projectedCompletion && (
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
                At the pace of your latest job you would reach {settings.target} days around{' '}
                <strong>{prettyDate(result.projectedCompletion)}</strong>.
              </p>
            )}
          </>
        )}
      </div>

      {/* Notices */}
      {result.notices.length > 0 && (
        <ul className="space-y-2">
          {result.notices
            .filter(n => !n.jobId)
            .map(n => (
              <li
                key={n.text}
                className={`text-sm rounded-lg px-3 py-2 ${
                  n.severity === 'error'
                    ? 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'
                    : n.severity === 'warning'
                      ? 'bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300'
                }`}
              >
                {n.text}
              </li>
            ))}
        </ul>
      )}

      {/* Jobs */}
      <div className="space-y-4">
        {jobs.map((job, i) => {
          const jr = result.jobs.find(r => r.jobId === job.id);
          const verdict = postcodeVerdict(settings.subclass, job.industry, job.postcode);
          const jobNotices = result.notices.filter(n => n.jobId === job.id);
          return (
            <fieldset key={job.id} className="border border-slate-200 dark:border-slate-700 rounded-xl p-4">
              <legend className="px-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Job {i + 1}
                {jr && (
                  <span className="ml-2 font-mono font-normal text-blue-700 dark:text-blue-300">
                    {Math.floor(jr.credited)} days{jr.estimate ? ' (estimate)' : ''}
                  </span>
                )}
              </legend>
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className={labelCls}>Employer</span>
                  <input className={`${inputCls} mt-1`} value={job.employer} onChange={e => updateJob(job.id, { employer: e.target.value })} />
                </label>
                <label className="block">
                  <span className={labelCls}>Employer ABN</span>
                  <input className={`${inputCls} mt-1`} inputMode="numeric" value={job.abn} onChange={e => updateJob(job.id, { abn: e.target.value })} />
                </label>
                <label className="block">
                  <span className={labelCls}>Industry</span>
                  <select className={`${inputCls} mt-1`} value={job.industry} onChange={e => updateJob(job.id, { industry: e.target.value as Industry })}>
                    {(Object.keys(INDUSTRY_LABELS) as Industry[]).map(k => (
                      <option key={k} value={k}>{INDUSTRY_LABELS[k]}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className={labelCls}>Postcode where you worked</span>
                  <input
                    className={`${inputCls} mt-1`}
                    inputMode="numeric"
                    maxLength={4}
                    value={job.postcode}
                    onChange={e => updateJob(job.id, { postcode: e.target.value.replace(/\D/g, '') })}
                  />
                  {POSTCODE_DATA_REVIEWED && verdict === 'eligible' && (
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 block">Counts for this industry on your visa</span>
                  )}
                  {(!POSTCODE_DATA_REVIEWED || verdict === 'unknown') && job.postcode.length === 4 && verdict !== 'eligible' && (
                    <span className="text-xs text-slate-400 mt-1 block">
                      Check this postcode on the{' '}
                      <a href={official} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        official eligible list
                      </a>
                      .
                    </span>
                  )}
                </label>
                <label className="block">
                  <span className={labelCls}>Start date</span>
                  <input type="date" className={`${inputCls} mt-1`} value={job.start} onChange={e => updateJob(job.id, { start: e.target.value })} />
                </label>
                <label className="block">
                  <span className={labelCls}>End date (or planned end)</span>
                  <input type="date" className={`${inputCls} mt-1`} value={job.end} onChange={e => updateJob(job.id, { end: e.target.value })} />
                </label>
                <label className="block">
                  <span className={labelCls}>How you worked</span>
                  <select className={`${inputCls} mt-1`} value={job.mode} onChange={e => updateJob(job.id, { mode: e.target.value as WorkMode })}>
                    <option value="full-time">Full-time (normal full hours for the job)</option>
                    <option value="part-time">Part-time</option>
                    <option value="volunteer">Volunteer recovery work (declared bushfire or disaster area)</option>
                  </select>
                </label>
                {job.mode === 'full-time' && (
                  <label className="block">
                    <span className={labelCls}>Unpaid days in this period (e.g. weather)</span>
                    <input type="number" min={0} className={`${inputCls} mt-1`} value={job.unpaidDays} onChange={e => updateJob(job.id, { unpaidDays: Number(e.target.value) })} />
                  </label>
                )}
                {job.mode === 'part-time' && (
                  <>
                    <label className="block">
                      <span className={labelCls}>Days you work per fortnight</span>
                      <input type="number" min={0} max={14} className={`${inputCls} mt-1`} value={job.daysPerFortnight} onChange={e => updateJob(job.id, { daysPerFortnight: Number(e.target.value) })} />
                    </label>
                    <label className="block">
                      <span className={labelCls}>Days a full-timer works per fortnight in this job</span>
                      <input type="number" min={1} max={14} className={`${inputCls} mt-1`} value={job.fullTimeDaysPerFortnight} onChange={e => updateJob(job.id, { fullTimeDaysPerFortnight: Number(e.target.value) })} />
                    </label>
                    <label className="block">
                      <span className={labelCls}>Unpaid days in this period</span>
                      <input type="number" min={0} className={`${inputCls} mt-1`} value={job.unpaidDays} onChange={e => updateJob(job.id, { unpaidDays: Number(e.target.value) })} />
                    </label>
                  </>
                )}
                {job.mode === 'volunteer' && (
                  <label className="block">
                    <span className={labelCls}>Days you actually worked</span>
                    <input type="number" min={0} className={`${inputCls} mt-1`} value={job.volunteerDaysWorked} onChange={e => updateJob(job.id, { volunteerDaysWorked: Number(e.target.value) })} />
                  </label>
                )}
              </div>
              {jobNotices.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {jobNotices.map(n => (
                    <li key={n.text} className={`text-xs ${n.severity === 'error' ? 'text-red-600 dark:text-red-400' : 'text-amber-700 dark:text-amber-300'}`}>
                      {n.text}
                    </li>
                  ))}
                </ul>
              )}
              {jobs.length > 1 && (
                <button
                  type="button"
                  onClick={() => setJobs(js => js.filter(j => j.id !== job.id))}
                  className="mt-3 text-xs text-slate-400 hover:text-red-600"
                >
                  Remove this job
                </button>
              )}
            </fieldset>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setJobs(js => [...js, newJob()])}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold"
        >
          + Add another job
        </button>
        <button
          type="button"
          onClick={exportJSON}
          className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"
        >
          Download a backup
        </button>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"
        >
          Restore a backup
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          className="hidden"
          onChange={e => {
            const f = e.target.files?.[0];
            if (f) importJSON(f);
            e.target.value = '';
          }}
        />
      </div>

      <p className="text-xs text-slate-400">
        {storageOk
          ? 'Your entries are saved only in this browser — nothing is sent to us. Browsers can clear saved data, so download a backup now and then.'
          : 'This browser is blocking saved data, so your entries will be lost when you close the page. Download a backup to keep them.'}
      </p>
    </div>
  );
}
