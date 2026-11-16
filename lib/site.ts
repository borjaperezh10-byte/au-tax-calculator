// Computed once when the app is built (Next.js evaluates this at
// `next build` time for statically generated pages), so every "last
// reviewed/updated" label below refreshes automatically on each deploy —
// without ever claiming a review happened on a day nothing was touched.
export const LAST_REVIEWED = new Date().toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric',
});

/**
 * Open Graph + Twitter tags for a page. Next.js replaces (not merges) the
 * root layout's openGraph/twitter objects, so every page that sets its own
 * title must also set these, otherwise shares show the homepage title.
 */
export function socialMeta(title: string, description: string, path: string) {
  return {
    openGraph: { title, description, url: path, images: ['/opengraph-image'] },
    twitter: { card: 'summary_large_image' as const, title, description },
  };
}
