import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
// import { FrontMatterPostType, PostByType, PostType } from '@/types/post';
import { remarkSectionize } from './remark-sectionize-fork';
import { remarkFigure } from './remark-figure';
import { remarkMeta } from './remark-meta';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { MDXFrontMatter } from '@/types/mdx';
import { parseISO, format } from "date-fns";

export const formatDate = (date: string): string => {
  return format(parseISO(date), "MMMM dd, yyyy");
};


// const typeToPath = {
//   [PostType.BLOGPOST]: 'content/blog',
//   [PostType.SNIPPET]: 'snippets',
// };

const root = process.cwd();

export const getFiles = async ( ) => {
  return fs.readdirSync(path.join(root, "content/blog" ));
};

// Regex to find all the custom static tweets in a MDX file
const TWEET_RE = /<StaticTweet\sid="[0-9]+"\s\/>/g;

export const getFileBySlug =  async (slug:string) => {
  const source = fs.readFileSync(
    path.join(root, "content/blog", `${slug}.mdx`),
    'utf8'
  );

  // const parsedFile = matter(source);
  // const data = parsedFile.data;
  // const content = parsedFile.content;
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        // remarkSectionize,
        rehypeSlug,
        rehypeAutolinkHeadings,
        remarkFigure,
      ],
      rehypePlugins: [remarkMeta],
    },
  });
  return {
    frontMatter: {
      ...data,
      readingTime: readingTime(content).text,
      url: "blog/" + slug,
      slug: slug,
    } as MDXFrontMatter,
    content:mdxSource,
  };

};

export const getAllFilesFrontMatter =  ()  => {
  const files = fs.readdirSync(path.join(root, "content/blog"));

  const posts = files
    .map((postSlug: string) => {
      const source = fs.readFileSync(
        path.join(root, "content/blog", postSlug),
        'utf8'
      );
      const { data, content } = matter(source);
      return {
        ...data,
        readingTime: readingTime(content).text,
        url: "blog/" + postSlug.replace(".mdx", ""),
        slug: postSlug.replace(".mdx", ""),
      } as unknown as MDXFrontMatter;
    })
    .sort((a, b) => (     
       new Date(b.date).getTime() -new Date(a.date).getTime()));
       return posts;

};
