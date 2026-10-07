import type { ReactNode } from 'react';

/* Shared layout for long-form guides: header with byline, Article + FAQ
 * structured data, body, FAQ, disclaimer and related links. Matches the
 * look of the existing hand-built guides. */

export interface Faq {
  q: string;
  a: string;
}

export interface RelatedLink {
  href: string;
  label: string;
}

interface Props {
  path: string; // e.g. '/guides/how-88-days-are-counted'
  title: string; // H1
  headline: string; // schema headline
  description: string; // schema description
  badge: string;
  subtitle: ReactNode;
  updated: string; // e.g. 'October 2026'
  faqs: Faq[];
  related: RelatedLink[];
  disclaimer?: ReactNode;
  children: ReactNode;
}

const SITE = 'https://www.auincometax.com';

export function GuideSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h2>
      <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}

export function B({ children }: { children: ReactNode }) {
  return <strong className="text-slate-900 dark:text-white">{children}</strong>;
}

export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      {children}
    </a>
  );
}

export function In({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
      {children}
    </a>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-sm text-blue-900 dark:text-blue-100">
      {children}
    </div>
  );
}

export function SimpleTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800 text-left">
            {head.map(h => (
              <th key={h} className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-slate-700 dark:text-slate-300">
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-slate-200 dark:border-slate-700">
              {r.map((c, j) => (
                <td key={j} className={`px-3 py-2 ${j === 0 ? 'font-medium' : ''}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GuideArticle(props: Props) {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.headline,
    description: props.description,
    author: { '@type': 'Person', name: 'Borja Pérez', url: `${SITE}/about` },
    publisher: { '@type': 'Organization', name: 'auincometax.com', url: SITE },
    mainEntityOfPage: `${SITE}${props.path}`,
    inLanguage: 'en-AU',
    isAccessibleForFree: true,
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {props.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            {props.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">{props.title}</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">{props.subtitle}</p>
          <p className="text-xs text-slate-400 mt-3">
            By <a href="/about" className="text-blue-500 hover:underline">Borja Pérez</a> · Updated {props.updated}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {props.children}

        {props.faqs.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
            <div className="space-y-5">
              {props.faqs.map(f => (
                <div key={f.q}>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">{f.q}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          {props.disclaimer ?? (
            <p>
              This guide is general information, not migration, tax or legal advice. Only the Department of Home
              Affairs decides whether your work counts towards a visa. Rules change; always check the official
              pages before you apply. See our{' '}
              <a href="/methodology" className="text-blue-500 hover:underline">methodology</a> and{' '}
              <a href="/tax-disclaimer" className="text-blue-500 hover:underline">disclaimer</a>.
            </p>
          )}
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Related reading</h2>
          <div className="flex flex-wrap gap-2">
            {props.related.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
