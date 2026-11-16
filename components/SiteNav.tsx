'use client';

import { useEffect, useRef, useState } from 'react';
import type { NavGroup, NavLink } from '@/lib/nav';

const BTN =
  'inline-flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors whitespace-nowrap';

/* Desktop navigation with dropdown groups. Click or keyboard opens a group;
   Escape or a click outside closes it. */
export default function SiteNav({ groups, links }: { groups: NavGroup[]; links: NavLink[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <ul ref={ref} className="flex items-center gap-1" role="list">
      {groups.map((g) => {
        const isOpen = open === g.label;
        return (
          <li key={g.label} className="relative">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={() => setOpen(isOpen ? null : g.label)}
              className={BTN}
            >
              {g.label}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className={isOpen ? 'rotate-180' : ''}>
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute left-0 top-full mt-1 z-50 min-w-64 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <ul role="list">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(null)}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {g.all && (
                  <a
                    href={g.all.href}
                    onClick={() => setOpen(null)}
                    className="mt-1 block rounded-lg border-t border-slate-100 px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-slate-100 dark:border-slate-700 dark:text-blue-400 dark:hover:bg-slate-700"
                  >
                    {g.all.label}
                  </a>
                )}
              </div>
            )}
          </li>
        );
      })}
      {links.map((l) => (
        <li key={l.href}>
          <a href={l.href} className={BTN}>
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
