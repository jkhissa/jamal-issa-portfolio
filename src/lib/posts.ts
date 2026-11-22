import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'writing'>;

/** Published articles, newest first. Drafts are included only in dev. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function readingMinutes(body = ''): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(d: Date, style: 'short' | 'long' = 'short'): string {
  return d.toLocaleDateString('en-GB', style === 'long'
    ? { day: 'numeric', month: 'short', year: 'numeric' }
    : { month: 'short', year: 'numeric' });
}
