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

        {/* Contact form placeholder */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Send a message</h2>
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email address</label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-type" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Type of enquiry</label>
              <select
                id="contact-type"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">Select one…</option>
                <option value="error">Calculation error</option>
                <option value="suggestion">Suggestion or feature request</option>
                <option value="question">General question</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Describe your issue or question. For calculation errors, please include the income amount, residency type, and the ATO source for the correct value."
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-y"
              />
            </div>
            <p className="text-xs text-slate-400">
              By submitting this form, you agree to our <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </p>
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-6 py-2.5 text-sm transition-colors"
            >
              Send message
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}
