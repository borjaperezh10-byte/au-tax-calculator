import { redirect } from 'next/navigation';
import { getAdminEmail } from '@/lib/admin-auth';
import { gscConfigured, inspectUrl, sitemapUrls, SITE_ORIGIN, type Inspection } from '@/lib/gsc';
import AdminNav from '../nav';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

async function inspectAll(urls: string[]): Promise<Inspection[]> {
  const out: Inspection[] = [];
  for (let i = 0; i < urls.length; i += 6) {
    const batch = await Promise.all(urls.slice(i, i + 6).map(inspectUrl));
    out.push(...batch);
  }
  return out;
}

export default async function IndexingPage() {
  if (!(await getAdminEmail())) redirect('/admin/login');

  if (!gscConfigured()) {
    return (
      <main>
        <AdminNav current="indexing" />
        <div className="max-w-3xl mx-auto px-4 py-10 text-sm text-slate-600 dark:text-slate-300">
          Search Console is not connected yet. Add <code>GSC_SERVICE_ACCOUNT_JSON</code> in Vercel first.
        </div>
      </main>
    );
  }

  const urls = await sitemapUrls();
  const results = await inspectAll(urls);
  const indexed = results.filter((r) => r.verdict === 'PASS');
  const notIndexed = results.filter((r) => r.verdict !== 'PASS');

  return (
    <main className="pb-16">
      <AdminNav current="indexing" />
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Indexing</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Every URL in the sitemap checked with the Search Console URL Inspection API ({SITE_ORIGIN}/sitemap.xml). Reload the page to re-check.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">In sitemap</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">{urls.length}</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Indexed</p>
            <p className="text-2xl font-bold text-green-700 dark:text-green-400 tabular-nums">{indexed.length}</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Not indexed</p>
            <p className="text-2xl font-bold text-amber-700 dark:text-amber-400 tabular-nums">{notIndexed.length}</p>
          </div>
        </div>

        <section className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
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
                {[...notIndexed, ...indexed].map((r) => (
                  <tr key={r.url} className="border-t border-slate-100 dark:border-slate-700 align-top">
                    <td className="py-1.5 pr-3 break-all">{r.url.replace(SITE_ORIGIN, '') || '/'}</td>
                    <td className="py-1.5 pr-3 whitespace-nowrap">
                      <span
                        className={
                          r.verdict === 'PASS'
                            ? 'inline-block rounded-full px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300'
                            : 'inline-block rounded-full px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        }
                      >
                        {r.verdict === 'PASS' ? 'Indexed' : r.verdict === 'ERROR' ? 'Error' : 'Not indexed'}
                      </span>
                    </td>
                    <td className="py-1.5 pr-3">{r.error ? 'API error ' + r.error : r.coverage}</td>
                    <td className="py-1.5 whitespace-nowrap tabular-nums">{r.lastCrawl ? r.lastCrawl.slice(0, 10) : '–'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
