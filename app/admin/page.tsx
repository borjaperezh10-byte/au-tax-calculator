import { redirect } from 'next/navigation';
import { getAdminEmail } from '@/lib/admin-auth';
import { gscConfigured, isoDaysAgo, searchAnalytics, type Row } from '@/lib/gsc';
import AdminNav from './nav';

export const dynamic = 'force-dynamic';

const fmt = (n: number) => Math.round(n).toLocaleString('en-AU');
const pct = (n: number) => (n * 100).toFixed(1) + '%';

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

function Table({ title, rows, keyLabel }: { title: string; rows: Row[]; keyLabel: string }) {
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
                <td className="py-1.5 pr-3 break-all">{(r.keys?.[0] ?? '').replace('https://www.auincometax.com', '') || '/'}</td>
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
  try {
    const curRange = { startDate: isoDaysAgo(30), endDate: isoDaysAgo(3) };
    const prevRange = { startDate: isoDaysAgo(58), endDate: isoDaysAgo(31) };
    const [c, p, d, pg, q] = await Promise.all([
      searchAnalytics({ ...curRange }),
      searchAnalytics({ ...prevRange }),
      searchAnalytics({ ...curRange, dimensions: ['date'], rowLimit: 60 }),
      searchAnalytics({ ...curRange, dimensions: ['page'], rowLimit: 10 }),
      searchAnalytics({ ...curRange, dimensions: ['query'], rowLimit: 15 }),
    ]);
    cur = c[0];
    prev = p[0];
    daily = d.sort((a, b) => (a.keys?.[0] ?? '').localeCompare(b.keys?.[0] ?? ''));
    pages = pg;
    queries = q;
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

        <div className="grid lg:grid-cols-2 gap-4">
          <Table title="Top pages" rows={pages} keyLabel="Page" />
          <Table title="Top queries" rows={queries} keyLabel="Query" />
        </div>

        <p className="text-xs text-slate-400">
          Clicks come from Google Search only; direct visits and other sources are not included. AdSense figures are coming in a later phase.
        </p>
      </div>
    </main>
  );
}
