// Computed once when the app is built (Next.js evaluates this at
// `next build` time for statically generated pages), so every "last
// reviewed/updated" label below refreshes automatically on each deploy —
// without ever claiming a review happened on a day nothing was touched.
export const LAST_REVIEWED = new Date().toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric',
});
