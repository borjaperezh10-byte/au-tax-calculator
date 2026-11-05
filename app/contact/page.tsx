import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — AU Income Tax Calculator',
  description:
    'Contact auincometax.com — report a calculation error, suggest an improvement, or ask a question about the Australian income tax calculator.',
  alternates: { canonical: 'https://www.auincometax.com/contact' },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Contact</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Report a calculation error, suggest an improvement, or ask a question.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* What to contact about */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: '⚠️',
              title: 'Calculation error',
              detail: 'You believe a tax rate, threshold, or formula is incorrect. Please include the specific value and the ATO source you are referencing.',
            },
            {
              icon: '💡',
              title: 'Suggestion',
              detail: 'An idea to improve the calculator — a missing scenario, a feature request, or a UX improvement.',
            },
            {
              icon: '❓',
              title: 'General question',
              detail: 'A question about how the calculator works or what a result means. Note: we cannot provide personalised tax advice.',
            },
          ].map(({ icon, title, detail }) => (
            <div key={title} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
              <div className="text-2xl mb-2">{icon}</div>
              <h2 className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">{title}</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">{detail}</p>
            </div>
          ))}
        </div>

        {/* Not tax advice notice */}
        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-5 text-sm text-amber-800 dark:text-amber-300">
          <strong>Please note:</strong> We are not a registered tax agent and cannot provide personalised tax advice. For questions about your individual tax situation, please consult the{' '}
          <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">ATO</a>{' '}
          or a registered tax agent.
        </div>

        {/* Response times */}
        <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
          <h2 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">What to expect</h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex gap-3">
              <span className="text-blue-500 font-mono flex-shrink-0">✓</span>
              <div><strong className="text-slate-700 dark:text-slate-300">Calculation errors:</strong> Reviewed within 5 business days. Verified corrections are applied immediately and noted in the <a href="/changelog" className="text-blue-600 dark:text-blue-400 hover:underline">changelog</a>.</div>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-500 font-mono flex-shrink-0">✓</span>
              <div><strong className="text-slate-700 dark:text-slate-300">Suggestions:</strong> We read every suggestion but cannot guarantee a response or implementation.</div>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-500 font-mono flex-shrink-0">✓</span>
              <div><strong className="text-slate-700 dark:text-slate-300">General questions:</strong> We aim to respond within 5 business days where possible.</div>
            </div>
          </div>
        </section>

        {/* How to reach us */}
<section>
<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Email us</h2>
<div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 space-y-4 text-sm text-slate-600 dark:text-slate-400">
<p>
The fastest way to reach the site is email: <a href="mailto:borja@auincometax.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">borja@auincometax.com</a>. Choose the link that matches your message and your email app will open with the subject filled in.
</p>
<ul className="space-y-2">
<li><a href="mailto:borja@auincometax.com?subject=Calculation%20error%20report" className="text-blue-600 dark:text-blue-400 hover:underline">Report a calculation error</a></li>
<li><a href="mailto:borja@auincometax.com?subject=Suggestion%20for%20auincometax.com" className="text-blue-600 dark:text-blue-400 hover:underline">Send a suggestion</a></li>
<li><a href="mailto:borja@auincometax.com?subject=Question%20about%20auincometax.com" className="text-blue-600 dark:text-blue-400 hover:underline">Ask a general question</a></li>
</ul>
<p className="text-xs text-slate-400">
The email address you write from is used only to reply to you. See the <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>.
</p>
</div>
</section>

{/* What to include */}
<section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
<h2 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">What to include in a calculation error report</h2>
<ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-2">
<li>The page you used and the income year, for example the main calculator for 2026-27.</li>
<li>The inputs you entered: salary, residency type (resident, non-resident or working holiday maker), HELP debt, private health insurance and any deduction toggles.</li>
<li>The result you got and the result you expected.</li>
<li>The ATO page or table that supports the expected result. The <a href="https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">ATO resident tax rates</a> page is a good starting point.</li>
</ul>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
Before reporting, check our <a href="/methodology" className="text-blue-500 hover:underline">methodology</a> page: it lists the assumptions the calculator makes and a set of reference test cases, such as a resident on $80,000 taking home $63,880 before the optional $1,000 standard deduction.
</p>
</section>

{/* How corrections are handled */}
<section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
<h2 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">How we handle corrections</h2>
<ol className="list-decimal pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-2">
<li>We compare your report with the official ATO or Home Affairs page.</li>
<li>If the site is wrong, we fix the calculator or guide and record the change in the <a href="/changelog" className="text-blue-500 hover:underline">changelog</a>.</li>
<li>If the site is right, we reply with the source so you can check it yourself.</li>
<li>If the official sources are unclear or have changed recently, we say so on the page instead of guessing.</li>
</ol>
</section>

{/* Official help */}
<section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
<h2 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Need help with your own tax or visa situation?</h2>
<div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
<p>
This site gives general information only. For your own return, residency, super or HELP questions, use the <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Australian Taxation Office</a> or a registered tax agent. For working holiday visa conditions and specified work, use <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Home Affairs</a>. We cannot give personal tax or migration advice and cannot check an individual visa application.
</p>
<p>
More about who writes the site is on the <a href="/about" className="text-blue-500 hover:underline">about page</a>, and the <a href="/tax-disclaimer" className="text-blue-500 hover:underline">full disclaimer</a> explains the limits of the information.
</p>
</div>
</section>

      </div>
    </main>
  );
}
