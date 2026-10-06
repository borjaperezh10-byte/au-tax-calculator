import { redirect } from 'next/navigation';
import { getAdminEmail } from '@/lib/admin-auth';
import { gscConfigured, sitemapUrls, SITE_ORIGIN } from '@/lib/gsc';
import AdminNav from '../nav';
import IndexingTable from './table';

export const dynamic = 'force-dynamic';

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

  return (
    <main className="pb-16">
      <AdminNav current="indexing" />
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Indexing</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Every URL in the sitemap checked with the Search Console URL Inspection API ({SITE_ORIGIN}/sitemap.xml). Results appear as each URL is checked.
          </p>
        </div>
        <IndexingTable urls={urls} origin={SITE_ORIGIN} />
      </div>
    </main>
  );
}
