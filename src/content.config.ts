// News & events live as Markdown files in src/content/news/.
// A new file = a new article, no code changes needed.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      kind: z.enum(['news', 'event']),
      excerpt: z.string(),
      // optional until photos arrive; without it the article shows a placeholder
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { news };
