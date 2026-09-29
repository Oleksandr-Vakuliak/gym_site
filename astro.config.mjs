// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Fonts are downloaded at build time and served from the site itself:
  // no render-blocking request to Google Fonts, metric-matched fallbacks cut layout shift.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Sofia Sans Extra Condensed',
      cssVariable: '--font-sofia-condensed',
      weights: [700, 900],
      subsets: ['cyrillic', 'latin'],
      fallbacks: ['Arial Narrow', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Sofia Sans',
      cssVariable: '--font-sofia',
      weights: [400, 600, 700],
      subsets: ['cyrillic', 'latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
