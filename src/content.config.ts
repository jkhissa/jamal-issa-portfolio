import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Articles: one Markdown file per article in src/content/writing/
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),        // one-sentence standfirst shown under the title
    date: z.coerce.date(),
    topic: z.string(),              // e.g. "IAM", "OAuth", "Homelab"
    draft: z.boolean().default(false), // drafts show in `npm run dev` only
  }),
});

export const collections = { writing };
