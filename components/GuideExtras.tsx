const SITE = 'https://www.auincometax.com';

/* Breadcrumb schema and share links for the older hand-built guides
 * (guides built with GuideArticle already include both). */

export function GuideBreadcrumbLd({ path, title }: { path: string; title: string }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: SITE + '/guides' },
      { '@type': 'ListItem', position: 3, name: title, item: SITE + path },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}

export function GuideShare({ path, title }: { path: string; title: string }) {
  const u = encodeURIComponent(SITE + path);
  const t = encodeURIComponent(title + ' (free Australian tax guide)');
  const links = [
    { label: 'X', href: 'https://twitter.com/intent/tweet?text=' + t + '&url=' + u },
    { label: 'Facebook', href: 'https://www.facebook.com/sharer/sharer.php?u=' + u },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/sharing/share-offsite/?url=' + u },
    { label: 'WhatsApp', href: 'https://wa.me/?text=' + t + '%20' + u },
    { label: 'Reddit', href: 'https://www.reddit.com/submit?url=' + u + '&title=' + t },
  ];
  return (
    <section aria-label="Share this guide" className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-slate-500 dark:text-slate-400 mr-1">Share this guide:</span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-300 dark:border-slate-600 px-3 py-1 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {l.label}
        </a>
      ))}
    </section>
  );
}
