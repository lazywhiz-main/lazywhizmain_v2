import { createClient } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export type Article = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: {
    id: string;
    name: string;
  };
  publishedAt: string;
  updatedAt: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
}; 