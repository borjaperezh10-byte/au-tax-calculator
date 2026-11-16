'use client';

import { useEffect, useState } from 'react';

import type { NavGroup, NavLink } from '@/lib/nav';

/* Burger menu for small screens. The desktop nav stays a horizontal list. */
export default function MobileNav({ groups, links }: { groups: NavGroup[]; links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          )}
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-16 border-b border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800"
        >
          <div className="mx-auto max-w-5xl max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-2">
            {groups.map((g) => (
              <div key={g.label} className="py-1">
                <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">{g.label}</p>
                <ul role="list">
                  {[...g.links, ...(g.all ? [g.all] : [])].map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <ul role="list" className="border-t border-slate-100 py-1 dark:border-slate-700">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}
