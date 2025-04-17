// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs(),
    react(),
    sitemap()
  ],
  vite: {
    optimizeDeps: {
      include: ['swiper']
    }
  },
  adapter: vercel({
    webAnalytics: { enabled: false }
  })
});