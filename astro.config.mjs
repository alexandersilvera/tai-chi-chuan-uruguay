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
  site: 'https://www.taichisun.com',
  output: 'server',
  integrations: [
    tailwind(),
    alpinejs(),
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/dashboard/') &&
        !page.includes('/blog/tag/'),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://www.taichisun.com/') {
          item.priority = 1.0;
          item.changefreq = /** @type {any} */ ('weekly');
        }
        else if (item.url.match(/\/(quienes-somos|clases|contacto|blog)\/$/)) {
          item.priority = 0.9;
          item.changefreq = /** @type {any} */ ('monthly');
        }
        return item;
      }
    }),
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