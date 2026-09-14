import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Australia Income Tax Calculator 2026-27 | Take-Home Pay',
    template: '%s | AU Income Tax Calculator',
  },
  description:
    'Free Australian income tax calculator for 2026-27. Calculate take-home pay, income tax, Medicare levy, HECS/HELP and super. Updated for the new 15% tax rate. Instant results.',
  keywords: [
    'income tax calculator australia',
    'australian tax calculator 2026',
    'salary after tax australia',
    'take home pay calculator australia',
    'ato tax calculator 2026-27',
    'medicare levy calculator',
    'hecs repayment calculator',
    'payg calculator australia',
    'net pay calculator australia',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'AU Income Tax Calculator',
    url: 'https://www.auincometax.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australia Income Tax Calculator 2026-27',
    description: 'Calculate your Australian take-home pay, tax, Medicare levy and HECS for 2026-27.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://www.auincometax.com',
  },
};

const NAV_LINKS = [
  { href: '/',                   label: 'Calculator' },
  { href: '/tax-brackets',       label: 'Tax Brackets' },
  { href: '/working-holiday-maker', label: 'Working Holiday' },
  { href: '/about',              label: 'About' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>

        {/* Site header / navigation */}
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
            <a
              href="/"
              className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="AU Income Tax Calculator — home"
            >
              <span className="text-lg" aria-hidden="true">🇦🇺</span>
              <span className="text-sm font-bold tracking-tight">auincometax.com</span>
            </a>
            <nav aria-label="Main navigation">
              <ul className="flex items-center gap-1" role="list">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <div id="main-content">
          {children}
        </div>

        {/* Site-wide footer */}
        <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-8">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Calculators</p>
                <ul className="space-y-2" role="list">
                  <li><a href="/" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Income Tax</a></li>
                  <li><a href="/working-holiday-maker" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Working Holiday</a></li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Reference</p>
                <ul className="space-y-2" role="list">
                  <li><a href="/tax-brackets" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Tax Brackets 2026-27</a></li>
                  <li><a href="/salary-table" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Salary &amp; Tax Table</a></li>
                  <li><a href="/methodology" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Methodology</a></li>
                  <li><a href="/glossary" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Tax Glossary</a></li>
                  <li><a href="/changelog" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Changelog</a></li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Salaries</p>
                <ul className="space-y-2" role="list">
                  {[60000, 80000, 100000, 120000, 150000].map(s => (
                    <li key={s}>
                      <a href={`/salary/${s}`} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
                        ${(s/1000).toFixed(0)}K salary
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Site</p>
                <ul className="space-y-2" role="list">
                  <li><a href="/about" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
                  <li><a href="/contact" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
                  <li><a href="/privacy-policy" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
                  <li><a href="/terms-of-use" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Terms of Use</a></li>
                  <li><a href="/tax-disclaimer" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Tax Disclaimer</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-700 pt-6 text-center space-y-2">
              <p className="text-xs text-slate-400">
                Rates based on{' '}
                <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">ATO</a>
                {' '}legislated 2026–27 tables. Last reviewed July 2026.
              </p>
              <p className="text-xs text-slate-400">
                For indicative purposes only — not financial or tax advice.{' '}
                <a href="/tax-disclaimer" className="text-blue-500 hover:underline">Full disclaimer →</a>
              </p>
              <p className="text-xs text-slate-400">
                © {new Date().getFullYear()} auincometax.com — Free Australian income tax calculator
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
