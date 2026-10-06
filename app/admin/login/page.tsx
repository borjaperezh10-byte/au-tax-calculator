export default function AdminLoginPage() {
  return (
    <main className="max-w-sm mx-auto px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Admin</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">Private area. Sign in with the owner&rsquo;s Google account.</p>
      <a
        href="/api/admin/login"
        className="inline-block rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 text-sm"
      >
        Sign in with Google
      </a>
    </main>
  );
}
