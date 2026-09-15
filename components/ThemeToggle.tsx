'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // On mount, read the theme the boot script already applied (localStorage,
  // falling back to system preference) so the switch matches the page.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initialDark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(initialDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  }, [isDark, mounted]);

  return (
    <label className="flex items-center gap-2 flex-shrink-0 cursor-pointer select-none">
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
        Dark mode
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
        onClick={() => setIsDark(v => !v)}
        className={`relative inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800 ${
          isDark ? 'bg-blue-600' : 'bg-slate-300'
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
            isDark ? 'translate-x-[18px]' : 'translate-x-[3px]'
          }`}
        />
      </button>
    </label>
  );
}
