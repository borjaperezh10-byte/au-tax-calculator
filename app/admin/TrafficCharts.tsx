const SITE_TAG = process.env.CF_SITE_TAG || 'e37a6c8e41624b568583a441031261ea';

type Day = { date: string; views: number; visits: number };

const DAY_MS = 86400000;
const BOX = 'rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4';
const H2 = 'font-semibold text-slate-900 dark:text-white mb-3';
const MUTED = 'text-sm text-slate-500 dark:text-slate-400';

async function load(days: number): Promise<{ rows?: Day[]; error?: string }> {
  const token = process.env.CF_API_TOKEN;
  const account = process.env.CF_ACCOUNT_ID;
  if (!token || !account) return { error: 'setup' };
  const start = new Date(Date.now() - (days - 1) * DAY_MS);
  const from = start.toISOString().slice(0, 10) + 'T00:00:00Z';
  const to = new Date().toISOString();
  const query =
    'query($acc:String!,$tag:String!,$from:Time!,$to:Time!){viewer{accounts(filter:{accountTag:$acc}){' +
    'rumPageloadEventsAdaptiveGroups(limit:200,filter:{AND:[{datetime_geq:$from,datetime_leq:$to},{siteTag:$tag}]},orderBy:[date_ASC]){' +
    'count sum{visits} dimensions{date}}}}}';
  try {
    const res = await fetch('https://api.cloudflare.com/client/v4/graphql', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { acc: account, tag: SITE_TAG, from, to } }),
      cache: 'no-store',
    });
    const j = await res.json();
    if (j.errors && j.errors.length) return { error: String(j.errors[0].message) };
    const groups = (j.data && j.data.viewer && j.data.viewer.accounts && j.data.viewer.accounts[0] && j.data.viewer.accounts[0].rumPageloadEventsAdaptiveGroups) || [];
    const map = new Map<string, Day>();
    for (const g of groups) {
      map.set(g.dimensions.date, { date: g.dimensions.date, views: g.count || 0, visits: (g.sum && g.sum.visits) || 0 });
    }
    const rows: Day[] = [];
    for (let i = 0; i < days; i++) {
      const d = new Date(start.getTime() + i * DAY_MS).toISOString().slice(0, 10);
      rows.push(map.get(d) || { date: d, views: 0, visits: 0 });
    }
    return { rows };
  } catch (e) {
    return { error: e instanceof Error ? e.message : 'Request failed' };
  }
}

function DayBars({ rows, field, label }: { rows: Day[]; field: 'views' | 'visits'; label: string }) {
  const max = Math.max(1, ...rows.map((r) => r[field]));
  const w = 560;
  const h = 120;
  const bw = w / rows.length;
  return (
    <svg viewBox={'0 0 ' + w + ' ' + (h + 18)} className="w-full" role="img" aria-label={label}>
      {rows.map((r, i) => {
        const bh = (r[field] / max) * h;
        return (
          <rect key={r.date} x={i * bw + 1} y={h - bh} width={Math.max(1, bw - 2)} height={bh} rx={1} className="fill-blue-500">
            <title>{r.date + ': ' + r[field]}</title>
          </rect>
        );
      })}
      <text x={0} y={h + 14} className="fill-slate-500 dark:fill-slate-400" fontSize="10">
        {rows[0].date}
      </text>
      <text x={w} y={h + 14} textAnchor="end" className="fill-slate-500 dark:fill-slate-400" fontSize="10">
        {rows[rows.length - 1].date}
      </text>
      <text x={w} y={10} textAnchor="end" className="fill-slate-500 dark:fill-slate-400" fontSize="10">
        {'max ' + max}
      </text>
    </svg>
  );
}

export default async function TrafficCharts() {
  const { rows, error } = await load(30);
  if (!rows) {
    return (
      <section className={BOX}>
        <h2 className={H2}>Page views and visits</h2>
        <p className={MUTED}>
          {error === 'setup'
            ? 'Not connected yet. Add CF_API_TOKEN and CF_ACCOUNT_ID in Vercel (Cloudflare Web Analytics read token) and redeploy.'
            : 'Cloudflare Analytics error: ' + error}
        </p>
      </section>
    );
  }
  const totalViews = rows.reduce((a, r) => a + r.views, 0);
  const totalVisits = rows.reduce((a, r) => a + r.visits, 0);
  return (
    <>
      <section className={BOX}>
        <h2 className={H2}>{'Page views per day (last 30 days: ' + totalViews.toLocaleString('en-AU') + ')'}</h2>
        <DayBars rows={rows} field="views" label="Daily page views from Cloudflare Web Analytics" />
      </section>
      <section className={BOX}>
        <h2 className={H2}>{'Visits per day, closest to unique users (last 30 days: ' + totalVisits.toLocaleString('en-AU') + ')'}</h2>
        <DayBars rows={rows} field="visits" label="Daily visits from Cloudflare Web Analytics" />
        <p className={MUTED + ' mt-2'}>Cloudflare counts visits, not unique people: the same person returning later counts again.</p>
      </section>
    </>
  );
}
