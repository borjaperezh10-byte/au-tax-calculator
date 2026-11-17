'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ads-consent'; // 'granted' | 'denied'
const ADSENSE_SRC =
  'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8059094828506918';
export const OPEN_EVENT = 'open-consent-settings';

function readChoice(): 'granted' | 'denied' | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

function loadAdSense() {
  if (document.querySelector('script[data-adsense-loader]')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = ADSENSE_SRC;
  s.crossOrigin = 'anonymous';
  s.setAttribute('data-adsense-loader', 'true');
  document.head.appendChild(s);
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = readChoice();
    if (choice === 'granted') loadAdSense();
    // Deferred so the banner is decided after hydration (no server/client mismatch).
    const timer = choice === null ? window.setTimeout(() => setVisible(true), 0) : undefined;

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      window.removeEventListener(OPEN_EVENT, reopen);
    };
  }, []);

  function choose(value: 'granted' | 'denied') {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage unavailable: choice applies to this visit only */
    }
    if (value === 'granted') {
      loadAdSense();
    } else if (document.querySelector('script[data-adsense-loader]')) {
      // Withdrawing consent after ads were loaded: reload so no ad scripts run.
      window.location.reload();
      return;
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg"
    >
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <div className="text-sm text-slate-700 dark:text-slate-300">
          <p id="consent-title" className="font-semibold text-slate-900 dark:text-slate-100">
            Cookies and advertising
          </p>
          <p>
            This calculator is free. We would like to show Google AdSense ads, which use cookies.
            No ad cookies are set unless you accept. Our analytics do not use cookies. See our{' '}
            <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 underline">
              privacy policy
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="px-4 py-2 rounded-lg text-sm font-semibold border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="px-4 py-2 rounded-lg text-sm font-semibold border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
