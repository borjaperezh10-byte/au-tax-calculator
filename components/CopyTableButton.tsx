'use client';

import { useState } from 'react';

export default function CopyTableButton({ tsv }: { tsv: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(tsv);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently, table is still selectable/readable.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors"
      aria-live="polite"
    >
      {copied ? '✓ Copied — paste into Excel or Sheets' : '📋 Copy table (for Excel / Sheets)'}
    </button>
  );
}
