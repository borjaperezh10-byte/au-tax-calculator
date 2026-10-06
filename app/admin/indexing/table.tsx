'use client';

import { useEffect, useState } from 'react';

type Result = { url: string; verdict: string; coverage: string; lastCrawl: string; error?: string };

const card = 'rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4';

export default function IndexingTable({ urls, origin }: { urls: string[]; origin: string }) {
  const [results, setResults] = useState<Record<string, Result>>({});
  const [run, setRun] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setResults({});
    let next = 0;
    async function worker() {
      while (!cancelled) {
        const i = next++;
        if (i >= urls.length) return;
        const url = urls[i];
        let r: Result;
        try {
          const res = await fetch('/api/admin/inspect?url=' + encodeURIComponent(url), { cache: 'no-store' });
          r = res.ok ? ((await res.json()) as Result) : { url, verdict: 'ERROR', coverage: '', lastCrawl: '', error: String(res.status) };
        } catch {
          r = { url, verdict: 'ERROR', coverage: '', lastCrawl: '', error: 'network' };
        }
        if (!cancelled) setResults((prev) => ({ ...prev, [url]: r }));
      }
    }
    for (let k = 0; k < 3; k++) worker();
    return () => {
      cancelled = true;
    };
  }, [urls, run]);

  const done = Object.values(results);
  const indexed = done.filter((r) => r.verdict === 'PASS').length;
  const notIndexed = done.length - indexed;
  const rows = urls.map((u) => ({ u, r: results[u] ?? null }));
  const ordered = [
    ...rows.filter((x) => x.r && x.r.verdict !== 'PASS'),
    ...rows.filter((x) => x.r && x.r.verdict === 'PASS'),
    ...rows.filter((x) => !x.r),
  ];

  return (
    <>
      <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
        <span>
          Checked {done.length} of {urls.length}
          {done.length < urls.length ? ' (running…)' : ''}
        </span>
        <button
          type="button"
          onClick={() => setRun((n) => n + 1)}
          className="rounded border border-slate-300 dark:border-slate-600 px-2 py-0.5 text-xs hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          Re-check
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className={card}>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">In sitemap</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">{urls.length}</p>
        </div>
        <div className={card}>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Indexed</p>
          <p className="text-2xl font-bold text-green-700 dark:text-green-400 tabular-nums">{indexed}</p>
        </div>
        <div className={card}>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Not indexed</p>
          <p className="text-2xl font-bold text-amber-700 dark:text-amber-400 tabular-nums">{notIndexed}</p>
        </div>
      </div>

      <section className={card}>
        <h2 className="font-semibold text-slate-900 dark:text-white mb-3">All URLs</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <th className="pb-2 pr-3 font-medium">URL</th>
                <th className="pb-2 pr-3 font-medium">Status</th>
                <th className="pb-2 pr-3 font-medium">Detail</th>
                <th className="pb-2 font-medium">Last crawl</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              {ordered.map(({ r, u }) => (
                <tr key={u} className="border-t border-slate-100 dark:border-slate-700 align-top">
                  <td className="py-1.5 pr-3 break-all">{u.replace(origin, '') || '/'}</td>
                  <td className="py-1.5 pr-3 whitespace-nowrap">
                    {r ? (
                      <span
                        className={
                          r.verdict === 'PASS'
                            ? 'inline-block rounded-full px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300'
                            : 'inline-block rounded-full px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        }
                      >
                        {r.verdict === 'PASS' ? 'Indexed' : r.verdict === 'ERROR' ? 'Error' : 'Not indexed'}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400">Checking…</span>
                    )}
                  </td>
                  <td className="py-1.5 pr-3">{r ? (r.error ? 'API error ' + r.error : r.coverage) : ''}</td>
                  <td className="py-1.5 whitespace-nowrap tabular-nums">{r && r.lastCrawl ? r.lastCrawl.slice(0, 10) : '–'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
