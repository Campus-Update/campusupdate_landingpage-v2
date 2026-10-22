import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain before launch
  site: 'https://campusupdate.com',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
