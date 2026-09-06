// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Split the sitemap into semantic chunks so route/port/directory/glossary/
 * region sections can be monitored for indexing independently.
 * chunk callback receives the sitemap item ({ url, links, lastmod, ... })
 * and must return the item object (not a string) for it to be excluded
 * from the `pages` fallback chunk.
 */
const chunk = (prefix) => (item) =>
  item.url.startsWith(`https://worldfreighthub.net/${prefix}`) ? item : undefined;

// https://astro.build/config
export default defineConfig({
  site: 'https://worldfreighthub.net',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    sitemap({
      chunks: {
        directory: chunk('directory/'),
        routes: chunk('routes/'),
        ports: chunk('ports/'),
        glossary: chunk('glossary/'),
        methods: chunk('methods/'),
        countries: chunk('countries/'),
        tools: chunk('tools/'),
        europe: chunk('europe/'),
        middleeast: chunk('middleeast/'),
        arabic: chunk('ar/'),
      },
    }),
  ],
});
