import { WordPressPost, WordPressPage, WordPressMedia } from '../types/wordpress';

const WP_BASE_URL = import.meta.env.VITE_WP_BASE_URL || 'https://www.vanjariworld.com';
const WP_API_URL = `${WP_BASE_URL}/wp-json/wp/v2`;

export class WordPressService {
  static async fetchPosts(params?: {
    per_page?: number;
    categories?: string;
    _embed?: boolean;
  }): Promise<WordPressPost[]> {
    const queryParams = new URLSearchParams();

    if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
    if (params?.categories) queryParams.append('categories', params.categories);
    if (params?._embed) queryParams.append('_embed', 'true');

    const response = await fetch(`${WP_API_URL}/posts?${queryParams}`);
    if (!response.ok) throw new Error('Failed to fetch posts');

    const posts = await response.json();

    return posts.map((post: any) => ({
      ...post,
      featured_media_url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''
    }));
  }

  static async fetchPostBySlug(slug: string): Promise<WordPressPost | null> {
    const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed=true`);
    if (!response.ok) throw new Error('Failed to fetch post');

    const posts = await response.json();
    if (posts.length === 0) return null;

    const post = posts[0];
    return {
      ...post,
      featured_media_url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''
    };
  }

  static async fetchPages(params?: { per_page?: number }): Promise<WordPressPage[]> {
    const queryParams = new URLSearchParams();
    if (params?.per_page) queryParams.append('per_page', params.per_page.toString());

    const response = await fetch(`${WP_API_URL}/pages?${queryParams}`);
    if (!response.ok) throw new Error('Failed to fetch pages');

    return response.json();
  }

  static async fetchPageBySlug(slug: string): Promise<WordPressPage | null> {
    const response = await fetch(`${WP_API_URL}/pages?slug=${slug}`);
    if (!response.ok) throw new Error('Failed to fetch page');

    const pages = await response.json();
    return pages.length > 0 ? pages[0] : null;
  }

  static async fetchMedia(mediaId: number): Promise<WordPressMedia | null> {
    const response = await fetch(`${WP_API_URL}/media/${mediaId}`);
    if (!response.ok) return null;

    return response.json();
  }

  static async fetchCustomEndpoint(endpoint: string): Promise<any> {
    const response = await fetch(`${WP_BASE_URL}/wp-json/${endpoint}`);
    if (!response.ok) throw new Error(`Failed to fetch ${endpoint}`);

    return response.json();
  }
}
