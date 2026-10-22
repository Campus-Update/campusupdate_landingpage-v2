import type { APIRoute } from 'astro';

// Public, indexable pages only (the 404 is excluded).
const paths = ['/', '/privacy', '/terms', '/cookies'];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://campusupdate.com');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((p) => `  <url><loc>${new URL(p, base).toString()}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
