// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://talalemran.com',
    devToolbar: {
    enabled: false, // Set this to false to disable the toolbar
  },
  integrations: [mdx({
    shikiConfig: {
      theme: 'dracula',
    }
  }), sitemap()],
});