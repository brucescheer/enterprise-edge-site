import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://getenterpriseedge.com',

  /* /foo/ -> /foo/index.html, never /foo.html. Astro's default, set
     explicitly because the edge URLs get printed on slides and handouts. */
  build: { format: 'directory' },

  integrations: [sitemap()],
});
