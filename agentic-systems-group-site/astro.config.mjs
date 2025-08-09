import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.agenticsystems.group', // TODO: replace with canonical domain
  integrations: [sitemap()],
  output: 'static'
});
