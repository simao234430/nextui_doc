import { ReadTimeResults } from "reading-time";

 
export type MDXFrontMatter = {
    author: any;
    slug: string;
    url: string;
    title: string;
    description?: string;
    date: string;
    updated: string;
    image: string;
    tags?: Array<string>;
    readingTime: string;
  };