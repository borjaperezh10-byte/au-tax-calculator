import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use — AU Income Tax Calculator',
  description:
    'Terms of use for auincometax.com — conditions governing use of our free Australian income tax calculator.',
  alternates: { canonical: 'https://www.auincometax.com/terms-of-use' },
  robots: { index: true, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Terms of Use</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Last updated: July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-5 text-sm text-amber-800 dark:text-amber-300">
          <strong>Important:</strong> By using auincometax.com, you agree to these terms. If you do not agree, please do not use the site.
        </div>

        <section className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
          <p>
            These Terms of Use govern your access to and use of auincometax.com and any related services (collectively, the &ldquo;Service&rdquo;). By accessing or using the Service, you confirm you are at least 18 years old and agree to be bound by these Terms.
          </p>
        </section>

        <section className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Nature of the Service</h2>
          <p>
            auincometax.com provides a free income tax estimation calculator for Australian income tax purposes. The Service:
          </p>
          <ul className="space-y-1 pl-4 list-disc">
            <li>Provides indicative estimates only, not legally binding tax calculations</li>
            <li>Is not connected to or endorsed by the Australian Taxation Office (ATO) or the Australian Government</li>
            <li>Does not constitute financial advice, tax advice, or accounting services</li>
            <li>Is not a substitute for professional advice from a registered tax agent</li>
          </ul>
          <p>
            See our full <a href="/tax-disclaimer" className="text-blue-600 dark:text-blue-400 hover:underline">Tax Disclaimer</a> for details on calculator limitations.
          </p>
        </section>

        <section className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Permitted Use</h2>
          <p>You may use the Service for personal, non-commercial purposes to estimate your Australian income tax liability. You agree not to:</p>
          <ul className="space-y-1 pl-4 list-disc">
            <li>Reproduce, distribute, or commercially exploit the Service or its content without prior written permission</li>
            <li>Use automated tools (bots, scrapers) to access the Service</li>
            <li>Attempt to interfere with or disrupt the Service</li>
            <li>Use the Service in any way that violates applicable laws or regulations</li>
            <li>Misrepresent calculator results as official ATO calculations</li>
          </ul>
        </section>

        <section className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Accuracy of Information</h2>
          <p>
            We make reasonable efforts to ensure the tax rates and calculations on this site are accurate and up to date. However, tax law changes frequently and calculator results may not reflect your individual circumstances. We cannot guarantee that results are accurate, complete, or current.
          </p>
          <p>
            You are solely responsible for verifying any information obtained from the Service before relying on it for financial or tax decisions. Always confirm your tax position with a registered tax agent or the ATO&apos;s own tools.
          </p>
        </section>

        <section className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Disclaimer of Warranties</h2>
          <p>
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied. To the maximum extent permitted by Australian law, we disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, auincometax.com and its operators shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Service or reliance on calculator results, including any tax underpayments, penalties, or professional fees incurred.
          </p>
          <p>
            Nothing in these Terms limits any rights you may have under the Australian Consumer Law.
          </p>
        </section>

        <section className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">7. Intellectual Property</h2>
          <p>
            All content on auincometax.com, including text, calculations, design, and code, is owned by or licensed to auincometax.com. Tax rates sourced from the ATO are reproduced for informational purposes; the ATO retains all rights to that material. You may not reproduce site content without permission, except for brief quotations with attribution.
          </p>
        </section>

        <section className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">8. Third-Party Links</h2>
          <p>
            The Service may contain links to third-party websites, including the ATO and Treasury. We are not responsible for the content or practices of those sites and encourage you to review their terms and privacy policies.
          </p>
        </section>

        <section className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Australia. Any disputes shall be subject to the exclusive jurisdiction of Australian courts.
          </p>
        </section>

        <section className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">10. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Changes take effect immediately upon posting. Continued use of the Service after changes constitutes acceptance.
          </p>
        </section>

        <section className="text-sm text-slate-600 dark:text-slate-400">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">11. Contact</h2>
          <p>
            Questions about these Terms? Please <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact us</a>.
          </p>
        </section>

        <div className="text-xs text-slate-400 text-center">
          These terms were last reviewed in July 2026.
        </div>
      </div>
    </main>
  );
}
