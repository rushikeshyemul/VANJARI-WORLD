export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  title: {
    rendered: string;
  };
}

export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  featured_media_url?: string;
  acf?: any;
}

export interface WordPressPage {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf?: any;
}

export interface MenuItem {
  id: number;
  title: string;
  url: string;
  children?: MenuItem[];
}

export interface Leader {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  excerpt: string;
}

export interface SliderImage {
  id: number;
  url: string;
  alt: string;
  caption?: string;
}
