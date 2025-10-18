// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://taichisun.com',
  output: 'server',
  integrations: [
    tailwind(),
    alpinejs(),
    react(),
    sitemap(),
    icon()
  ],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups'
    }
  },
  vite: {
    optimizeDeps: {
      include: ['swiper']
    }
  },
  adapter: vercel({
    webAnalytics: { enabled: false }
  })
});