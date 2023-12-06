import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '@/layouts/BlogPost';
 
import { getFileBySlug, getFiles } from '@/lib/mdx';
import MDXComponents from '@/components/MDX/MDXComponents';
 
import { FrontMatterPost, Post, PostType } from '@/types/post';
import { BlogHeader } from '@/components/blog/BlogHeader';

import { Container } from '@/components/common/Container';
import Balancer from 'react-wrap-balancer';

interface BlogProps {
  post?: FrontMatterPost;
 
}

const Blog = ({ post}: BlogProps) => {
  // const { isFallback } = useRouter();

  // if (isFallback || !post) {
  //   return <div>Loading...</div>;
  // }

 
  return (
 
    <Container>
     <div className="relative px-4 py-8 mx-auto max-w-screen-2xl md:px-8 md:py-16 lg:px-0">
        <BlogHeader frontmatter={post?.frontMatter} />
 
        <div className="blog prose prose-lg prose-slate prose-violet relative mx-auto w-full max-w-full prose-headings:mt-16 prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-gray-200 dark:prose-invert dark:prose-a:text-violet-400 dark:prose-hr:border-gray-800 lg:max-w-[994px] lg:px-16"> 
        <MDXRemote
        {...post?.content}
        components={{
          ...MDXComponents,
  
        }}/>
     </div>
    </div>
    </Container>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles();

  return {
    paths: posts.map((p: string) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getFileBySlug(  params!.slug as string);

 
    return { props: { post  } };
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
    return { notFound: true };
  }
};
