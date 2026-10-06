export default function AdminNav({ current }: { current: 'overview' | 'indexing' }) {
  const link = (href: string, label: string, key: string) => (
    <a
      href={href}
      className={
        key === current
          ? 'text-sm font-semibold text-blue-700 dark:text-blue-300'
          : 'text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
      }
    >
      {label}
    </a>
  );
  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="font-bold text-slate-900 dark:text-white">auincometax admin</span>
        {link('/admin', 'Traffic', 'overview')}
        {link('/admin/indexing', 'Indexing', 'indexing')}
        <a href="/api/admin/logout" className="ml-auto text-sm text-slate-500 dark:text-slate-400 hover:underline">
          Sign out
        </a>
      </div>
    </header>
  );
}
