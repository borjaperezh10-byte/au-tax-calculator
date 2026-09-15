import type { Metadata } from 'next';
import { LAST_REVIEWED } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy — AU Income Tax Calculator',
  description:
    'Privacy policy for auincometax.com — how we collect, use, and protect your information.',
  alternates: { canonical: 'https://www.auincometax.com/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Last updated: {LAST_REVIEWED}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        <section className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-slate-600 dark:text-slate-400 space-y-4">
          <p>
            This Privacy Policy describes how auincometax.com (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and handles information when you use our website at{' '}
            <a href="https://www.auincometax.com" className="text-blue-600 dark:text-blue-400 hover:underline">auincometax.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Information We Do Not Collect</h2>
          <div className="bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 text-sm text-emerald-800 dark:text-emerald-300 space-y-2">
            <p>
              The tax calculator on this site runs entirely in your browser. We do not collect, store, or transmit any salary, income, or financial data you enter into the calculator. All calculations happen client-side and are never sent to our servers.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Information We Collect Automatically</h2>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
            <p>
              Like most websites, we may collect certain information automatically when you visit auincometax.com:
            </p>
            <ul className="space-y-2 pl-4">
              <li><strong className="text-slate-700 dark:text-slate-300">Log data:</strong> Your browser type, operating system, referring URLs, pages visited, and timestamps. This information is used to understand how visitors use the site and to diagnose technical issues.</li>
              <li><strong className="text-slate-700 dark:text-slate-300">Cookies:</strong> We may use cookies to enable site functionality and to support third-party services described below. You can disable cookies in your browser settings, though this may affect site functionality.</li>
              <li><strong className="text-slate-700 dark:text-slate-300">IP addresses:</strong> Collected as part of standard server logs and used for security and analytics purposes.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Third-Party Services</h2>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-4">
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Google Analytics</h3>
              <p>
                We use Google Analytics to understand how visitors use our site. Google Analytics collects data such as pages visited, time on site, and general geographic location. This data is aggregated and anonymised. You can opt out of Google Analytics by installing the{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Google Analytics opt-out browser add-on
                </a>.
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Google AdSense</h3>
              <p>
                This site may display advertisements provided by Google AdSense. Google uses cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalised advertising at{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Google Ads Settings
                </a>.
                Google&apos;s use of advertising cookies is governed by{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Google&apos;s Privacy Policy
                </a>.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">How We Use Information</h2>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
            <p>Information we collect is used to:</p>
            <ul className="space-y-1 pl-4 list-disc">
              <li>Operate and improve the website</li>
              <li>Understand how visitors use the site</li>
              <li>Diagnose technical problems</li>
              <li>Display relevant advertising</li>
              <li>Respond to contact form inquiries</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with third parties except as described in this policy or as required by law.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Contact Forms</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            If you contact us via our <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact page</a>, we will collect your name, email address, and the content of your message solely to respond to your inquiry. We do not add you to any mailing lists without your explicit consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Your Rights</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Under the Australian Privacy Act 1988 and the Australian Privacy Principles, you may have the right to access, correct, or request deletion of personal information we hold about you. To exercise these rights, please <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact us</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Changes to This Policy</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Contact</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Questions about this policy? Please use our <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact page</a>.
          </p>
        </section>

        <div className="text-xs text-slate-400 text-center">
          This policy was last reviewed in {LAST_REVIEWED}.
        </div>
      </div>
    </main>
  );
}
