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
  integrations: [
    tailwind(),
    alpinejs(),
    react(),
    sitemap(),
    icon()
  ],
  vite: {
    optimizeDeps: {
      // Eliminamos lucide-astro de aquí
      include: ['swiper'] 
    }
  },
  adapter: vercel({
    webAnalytics: { enabled: false }
  })
});