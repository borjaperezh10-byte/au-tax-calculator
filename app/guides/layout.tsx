const LINK = 'text-sm text-blue-600 dark:text-blue-400 hover:underline';

// Wraps /guides and every guide below it with a short "keep exploring" block,
// so the guides pass link equity to the salary pages, the glossary and the
// contact page instead of only linking sideways to each other.
export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <aside aria-label="Keep exploring" className="max-w-4xl mx-auto px-4 pb-10">
        <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-3">Keep exploring</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2" role="list">
            <li><a href="/" className={LINK}>Income tax and take-home pay calculator</a></li>
            <li><a href="/salary-table" className={LINK}>Salary and tax table for every salary from $30K to $300K</a></li>
            <li><a href="/salary/60000" className={LINK}>What a $60,000 salary takes home</a></li>
            <li><a href="/salary/80000" className={LINK}>What an $80,000 salary takes home</a></li>
            <li><a href="/salary/100000" className={LINK}>What a $100,000 salary takes home</a></li>
            <li><a href="/salary/120000" className={LINK}>What a $120,000 salary takes home</a></li>
            <li><a href="/tax-brackets" className={LINK}>Tax brackets for 2026-27</a></li>
            <li><a href="/glossary" className={LINK}>Tax glossary: plain-English definitions</a></li>
            <li><a href="/changelog" className={LINK}>Changelog: what we updated and when</a></li>
            <li><a href="/contact" className={LINK}>Contact: spotted a mistake or have a question?</a></li>
          </ul>
        </div>
      </aside>
    </>
  );
}
