import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'Jamal Issa | Writing',
    description: 'Articles on identity and access management, business analysis and homelab projects.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: [post.data.topic],
      link: `/writing/${post.id}/`,
    })),
  });
}
