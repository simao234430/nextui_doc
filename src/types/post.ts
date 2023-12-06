import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export enum PostType {
  SNIPPET = 'snippet',
  BLOGPOST = 'blogPost',
}

export type ReadingTime = {
  text: string;
};

export type Post = {
  colorFeatured?: string;
  cover?: string;
  date: string;
  updated: string;
  featured?: boolean;
  fontFeatured?: string;
  keywords?: string[];
  slug: string;
  subtitle: string;
  title: string;
  image: string,
  description: string;
  type: PostType.BLOGPOST;
};

export type FrontMatterPost = {
  frontMatter: Post & {
    readingTime: ReadingTime;
    date: string;
  };
  slug:string,
  tweetIDs: string[];
  mdxSource: MDXRemoteSerializeResult;
};

 
 
 
