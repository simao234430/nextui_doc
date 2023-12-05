import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '@/layouts/BlogPost';
 
import { getFileBySlug, getFiles } from '@/lib/mdx';
import MDXComponents from '@/components/MDX/MDXComponents';
 
import { FrontMatterPost, Post, PostType } from '@/types/post';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { MDXContent } from '@/components/MDX/mdx-content';
import { Container } from '@/components/common/Container';



const Blog = ({ post}: Post) => {
  // const { isFallback } = useRouter();

  // if (isFallback || !post) {
  //   return <div>Loading...</div>;
  // }

 
  return (
 
    <Container   >
 <div className="relative px-4 py-8 mx-auto max-w-screen-2xl md:px-8 md:py-16 lg:px-0">
        <BlogHeader frontMatter={post.frontMatter} />
     
  
        <div className="blog prose prose-lg prose-slate prose-violet relative mx-auto w-full max-w-full prose-headings:mt-16 prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-gray-200 dark:prose-invert dark:prose-a:text-violet-400 dark:prose-hr:border-gray-800 lg:max-w-[994px] lg:px-16">
        <MDXRemote
        {...post.mdxSource}
        components={{
          ...MDXComponents,
  
        }}
      />
                <hr />
          {/* {post.authors.map((author, index) => (
            <Author key={index} {...author} />
          ))}
          {post.related_posts && <RelatedPosts posts={post.related_posts} />} */}
      </div>
      </div>
    </Container>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles(PostType.BLOGPOST);

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getFileBySlug(PostType.BLOGPOST, params!.slug as string);

 
    return { props: { post  } };
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
    return { notFound: true };
  }
};
