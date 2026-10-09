import { redirect } from 'next/navigation';
import { getAdminEmail } from '@/lib/admin-auth';
import { gscConfigured, isoDaysAgo, searchAnalytics, type Row } from '@/lib/gsc';
import AdminNav from './nav';

export const dynamic = 'force-dynamic';

const fmt = (n: number) => Math.round(n).toLocaleString('en-AU');
const pct = (n: number) => (n * 100).toFixed(1) + '%';

const COUNTRIES: Record<string, string> = {
  aus: 'Australia', usa: 'United States', gbr: 'United Kingdom', nzl: 'New Zealand', can: 'Canada', irl: 'Ireland', ind: 'India',
  phl: 'Philippines', idn: 'Indonesia', sgp: 'Singapore', mys: 'Malaysia', zaf: 'South Africa', deu: 'Germany', fra: 'France',
  esp: 'Spain', ita: 'Italy', nld: 'Netherlands', bra: 'Brazil', arg: 'Argentina', col: 'Colombia', mex: 'Mexico', chl: 'Chile',
  chn: 'China', hkg: 'Hong Kong', jpn: 'Japan', kor: 'South Korea', twn: 'Taiwan', tha: 'Thailand', vnm: 'Vietnam', npl: 'Nepal',
  pak: 'Pakistan', bgd: 'Bangladesh', lka: 'Sri Lanka', are: 'United Arab Emirates', sau: 'Saudi Arabia', tur: 'Turkey',
  pol: 'Poland', prt: 'Portugal', swe: 'Sweden', nor: 'Norway', dnk: 'Denmark', fin: 'Finland', che: 'Switzerland',
  aut: 'Austria', bel: 'Belgium', rus: 'Russia', ukr: 'Ukraine', nga: 'Nigeria', ken: 'Kenya', egy: 'Egypt', fji: 'Fiji',
};
const countryName = (k: string) => (COUNTRIES[k] ? COUNTRIES[k] + ' (' + k.toUpperCase() + ')' : k.toUpperCase());
const deviceName = (k: string) => k.charAt(0) + k.slice(1).toLowerCase();

function delta(cur: number, prev: number): string {
  if (prev === 0) return cur === 0 ? '–' : 'new';
  const d = ((cur - prev) / prev) * 100;
  return (d >= 0 ? '+' : '') + d.toFixed(0) + '% vs previous 28 days';
}

function Card({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
      <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1 tabular-nums">{value}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{note}</p>
    </div>
  );
}

function Bars({ rows }: { rows: Row[] }) {
  const max = Math.max(1, ...rows.map((r) => r.clicks));
  const w = 560;
  const h = 120;
  const bw = rows.length ? w / rows.length : w;
  return (
    <div>
      <svg viewBox={'0 0 ' + w + ' ' + (h + 18)} className="w-full" role="img" aria-label="Daily clicks from Google Search">
        {rows.map((r, i) => {
          const bh = (r.clicks / max) * h;
          return (
            <rect
              key={r.keys?.[0] ?? i}
              x={i * bw + 1}
              y={h - bh}
              width={Math.max(1, bw - 2)}
              height={bh}
              rx={1}
              className="fill-blue-500"
            >
              <title>{(r.keys?.[0] ?? '') + ': ' + r.clicks + ' clicks'}</title>
            </rect>
          );
        })}
        <text x={0} y={h + 14} className="fill-slate-500 dark:fill-slate-400" fontSize="10">
          {rows[0]?.keys?.[0] ?? ''}
        </text>
        <text x={w} y={h + 14} textAnchor="end" className="fill-slate-500 dark:fill-slate-400" fontSize="10">
          {rows[rows.length - 1]?.keys?.[0] ?? ''}
        </text>
        <text x={w} y={10} textAnchor="end" className="fill-slate-500 dark:fill-slate-400" fontSize="10">
          {'max ' + max}
        </text>
      </svg>
    </div>
  );
}

function PositionChart({ rows, start, end }: { rows: Row[]; start: string; end: string }) {
  const day = 86_400_000;
  const t0 = Date.parse(start + 'T00:00:00Z');
  const span = Math.max(1, Math.round((Date.parse(end + 'T00:00:00Z') - t0) / day));
  const pts = rows
    .map((r) => ({
      date: r.keys?.[0] ?? '',
      pos: r.position,
      impr: r.impressions,
      idx: Math.round((Date.parse((r.keys?.[0] ?? start) + 'T00:00:00Z') - t0) / day),
    }))
    .filter((p) => p.pos > 0 && p.idx >= 0 && p.idx <= span)
    .sort((a, b) => a.idx - b.idx);
  if (!pts.length) return <p className="text-sm text-slate-500 dark:text-slate-400">No positions recorded in this period yet.</p>;

  // 7-day moving average of the position, weighted by impressions, so a day with
  // 1 impression counts for much less than a day with 50.
  const WINDOW = 7;
  const avg: { idx: number; pos: number }[] = [];
  for (let i = 0; i <= span; i++) {
    let w = 0;
    let sum = 0;
    for (const p of pts) {
      if (p.idx > i - WINDOW && p.idx <= i) {
        w += p.impr;
        sum += p.pos * p.impr;
      }
    }
    if (w > 0) avg.push({ idx: i, pos: sum / w });
  }

  const W = 560;
  const H = 170;
  const L = 30;
  const R = 8;
  const T = 10;
  const B = 22;
  const all = [...pts.map((p) => p.pos), ...avg.map((a) => a.pos)];
  const lo = Math.max(1, Math.floor(Math.min(...all)) - 2);
  const hi = Math.ceil(Math.max(...all)) + 2;
  const x = (i: number) => L + (i / span) * (W - L - R);
  const y = (v: number) => T + ((v - lo) / Math.max(1, hi - lo)) * (H - T - B);
  const ticks = [lo, Math.round((lo + hi) / 2), hi];
  const path = avg
    .map((a, i) => (i === 0 || a.idx - avg[i - 1].idx > 1 ? 'M' : 'L') + x(a.idx).toFixed(1) + ' ' + y(a.pos).toFixed(1))
    .join(' ');
  const best = avg.length ? Math.min(...avg.map((a) => a.pos)) : 0;
  const lastAvg = avg[avg.length - 1];
  const lastDate = new Date(t0 + (lastAvg ? lastAvg.idx : 0) * day).toISOString().slice(0, 10);

  return (
    <div>
      <svg viewBox={'0 0 ' + W + ' ' + H} className="w-full" role="img" aria-label="Average Google Search position, 7-day moving average, lower is better">
        {ticks.map((v) => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} className="stroke-slate-200 dark:stroke-slate-700" strokeWidth={1} />
            <text x={L - 4} y={y(v) + 3} textAnchor="end" className="fill-slate-500 dark:fill-slate-400" fontSize="10">
              {v}
            </text>
          </g>
        ))}
        {pts.map((p) => (
          <circle key={p.date} cx={x(p.idx)} cy={y(p.pos)} r={1.5 + Math.min(3, Math.sqrt(p.impr) / 3)} fillOpacity={0.35} className="fill-blue-500">
            <title>{p.date + ': position ' + p.pos.toFixed(1) + ', ' + Math.round(p.impr) + ' impressions'}</title>
          </circle>
        ))}
        <path d={path} fill="none" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
        {lastAvg && <circle cx={x(lastAvg.idx)} cy={y(lastAvg.pos)} r={4} className="fill-blue-600 dark:fill-blue-400" />}
        <text x={L} y={H - 6} className="fill-slate-500 dark:fill-slate-400" fontSize="10">
          {start}
        </text>
        <text x={W - R} y={H - 6} textAnchor="end" className="fill-slate-500 dark:fill-slate-400" fontSize="10">
          {end}
        </text>
      </svg>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
        The line is the 7-day average position, weighted by impressions; the faint dots are the daily positions (bigger dot, more impressions). Lower is
        better: 1 is the top of Google and 10 is the bottom of page 1.
        {lastAvg ? ' Latest 7-day average ' + lastAvg.pos.toFixed(1) + ' (' + lastDate + '), best ' + best.toFixed(1) + '.' : ''}
      </p>
    </div>
  );
}

function Table({ title, rows, keyLabel, fmtKey }: { title: string; rows: Row[]; keyLabel: string; fmtKey?: (k: string) => string }) {
  return (
    <section className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
      <h2 className="font-semibold text-slate-900 dark:text-white mb-3">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              <th className="pb-2 pr-3 font-medium">{keyLabel}</th>
              <th className="pb-2 pr-3 font-medium text-right">Clicks</th>
              <th className="pb-2 pr-3 font-medium text-right">Impr.</th>
              <th className="pb-2 font-medium text-right">Pos.</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="py-3 text-slate-500 dark:text-slate-400">No data yet.</td>
              </tr>
            )}
            {rows.map((r) => (
              <tr key={r.keys?.[0]} className="border-t border-slate-100 dark:border-slate-700">
                <td className="py-1.5 pr-3 break-all">{fmtKey ? fmtKey(r.keys?.[0] ?? '') : (r.keys?.[0] ?? '').replace('https://www.auincometax.com', '') || '/'}</td>
                <td className="py-1.5 pr-3 text-right tabular-nums">{fmt(r.clicks)}</td>
                <td className="py-1.5 pr-3 text-right tabular-nums">{fmt(r.impressions)}</td>
                <td className="py-1.5 text-right tabular-nums">{r.position.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default async function AdminPage() {
  if (!(await getAdminEmail())) redirect('/admin/login');

  if (!gscConfigured()) {
    return (
      <main>
        <AdminNav current="overview" />
        <div className="max-w-3xl mx-auto px-4 py-10 text-sm text-slate-600 dark:text-slate-300">
          Search Console is not connected yet. Add the <code>GSC_SERVICE_ACCOUNT_JSON</code> environment variable in Vercel and
          add the service account as a user in Search Console.
        </div>
      </main>
    );
  }

  let error = '';
  let cur: Row | undefined;
  let prev: Row | undefined;
  let daily: Row[] = [];
  let pages: Row[] = [];
  let queries: Row[] = [];
  let countries: Row[] = [];
  let devices: Row[] = [];
  try {
    const curRange = { startDate: isoDaysAgo(30), endDate: isoDaysAgo(3) };
    const prevRange = { startDate: isoDaysAgo(58), endDate: isoDaysAgo(31) };
    const [c, p, d, pg, q, co, dv] = await Promise.all([
      searchAnalytics({ ...curRange }),
      searchAnalytics({ ...prevRange }),
      searchAnalytics({ ...curRange, dimensions: ['date'], rowLimit: 60 }),
      searchAnalytics({ ...curRange, dimensions: ['page'], rowLimit: 10 }),
      searchAnalytics({ ...curRange, dimensions: ['query'], rowLimit: 15 }),
        searchAnalytics({ ...curRange, dimensions: ['country'], rowLimit: 15 }),
        searchAnalytics({ ...curRange, dimensions: ['device'], rowLimit: 5 }),
    ]);
    cur = c[0];
    prev = p[0];
    daily = d.sort((a, b) => (a.keys?.[0] ?? '').localeCompare(b.keys?.[0] ?? ''));
    pages = pg;
    queries = q;
    countries = co;
    devices = dv;
  } catch (e) {
    error = e instanceof Error ? e.message : 'Unknown error';
  }

  const z: Row = { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  const c = cur ?? z;
  const p = prev ?? z;

  return (
    <main className="pb-16">
      <AdminNav current="overview" />
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Google Search traffic</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last 28 days ({isoDaysAgo(30)} to {isoDaysAgo(3)}). Search Console data arrives with a delay of about 2 to 3 days.
          </p>
        </div>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-200 dark:border-red-800 p-3 text-sm break-words">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Card label="Clicks" value={fmt(c.clicks)} note={delta(c.clicks, p.clicks)} />
          <Card label="Impressions" value={fmt(c.impressions)} note={delta(c.impressions, p.impressions)} />
          <Card label="CTR" value={pct(c.ctr)} note={'previous ' + pct(p.ctr)} />
          <Card label="Avg. position" value={c.position ? c.position.toFixed(1) : '–'} note={'previous ' + (p.position ? p.position.toFixed(1) : '–')} />
        </div>

        <section className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-3">Daily clicks</h2>
          {daily.length ? <Bars rows={daily} /> : <p className="text-sm text-slate-500 dark:text-slate-400">No clicks recorded in this period yet.</p>}
        </section>

        <section className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-3">Average position over time</h2>
          <PositionChart rows={daily} start={isoDaysAgo(30)} end={isoDaysAgo(3)} />
        </section>

        <div className="grid lg:grid-cols-2 gap-4">
          <Table title="Top pages" rows={pages} keyLabel="Page" />
          <Table title="Top queries" rows={queries} keyLabel="Query" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Table title="Top countries" rows={countries} keyLabel="Country" fmtKey={countryName} />
          <Table title="Devices" rows={devices} keyLabel="Device" fmtKey={deviceName} />
        </div>

        <p className="text-xs text-slate-400">
          Clicks come from Google Search only; direct visits and other sources are not included. AdSense figures are coming in a later phase.
        </p>
      </div>
    </main>
  );
}
