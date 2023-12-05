import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import { FrontMatterPostType, PostByType, PostType } from '@/types/post';
import { remarkSectionize } from './remark-sectionize-fork';
import { remarkFigure } from './remark-figure';
import { remarkMeta } from './remark-meta';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const typeToPath = {
  [PostType.BLOGPOST]: 'content/blog',
  [PostType.SNIPPET]: 'snippets',
};

const root = process.cwd();

export const getFiles = async (type: PostType) => {
  return fs.readdirSync(path.join(root, typeToPath[type] ));
};

// Regex to find all the custom static tweets in a MDX file
const TWEET_RE = /<StaticTweet\sid="[0-9]+"\s\/>/g;

export const getFileBySlug = async <T extends PostType>(
  type: T,
  slug: string
): Promise<FrontMatterPostType<T>> => {
  const source = fs.readFileSync(
    path.join(root, typeToPath[type], `${slug}.mdx`),
    'utf8'
  );

  const parsedFile = matter(source);

  const data = parsedFile.data;
  const content = parsedFile.content;

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
  if (type === PostType.BLOGPOST) {
    const result = {
      mdxSource,
 
      frontMatter: {
        readingTime: readingTime(content),
        ...data,
      },
    };

    return (result as unknown) as FrontMatterPostType<T>;
  }
  return ({
    mdxSource,
     
    frontMatter: data,
  } as unknown) as FrontMatterPostType<T>;
};

export const getAllFilesFrontMatter = async <T extends PostType>(
  type: T
): Promise<Array<PostByType<T>>> => {
  const files = fs.readdirSync(path.join(root, typeToPath[type]));

  const posts = files
    .map((postSlug: string) => {
      const source = fs.readFileSync(
        path.join(root, typeToPath[type], postSlug),
        'utf8'
      );
      const parsedFile = matter(source);

      return parsedFile.data as PostByType<T>;
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
};
