/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NYTArticle {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: any[];
  headline: {
    main: string;
    kicker: string;
    content_kicker: string;
    print_headline: string;
    name: string;
    seo: string;
    sub: string;
  };
  keywords: any[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: {
    original: string;
    person: any[];
    organization: string | null;
  };
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}

export interface NewsDataArticle {
  title: string;
  link: string;
  keywords: string[];
  creator: string[];
  video_url: string | null;
  description: string;
  content: string;
  pubDate: string;
  image_url: string | null;
  source_id: string;
  category: string[];
  country: string[];
  language: string;
}

export interface Filters {
  date: string;
  category: string;
  source: string;
}
