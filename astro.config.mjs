import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://issa-tech.com',
  integrations: [sitemap()],
  // No image processing needed: skips the native `sharp` dependency,
  // which isn't reliably installed in clean (CI) environments.
  image: { service: passthroughImageService() },
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});
