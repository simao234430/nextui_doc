import type { InferGetStaticPropsType } from 'next'
// TODO remove eslint-disable when fixed https://github.com/import-js/eslint-plugin-import/issues/1810
// eslint-disable-next-line import/no-unresolved
// import { useLiveReload } from 'next-contentlayer/hooks'
import type { FC } from 'react'
 
import { Container } from '../../components/common/Container'
import { defineStaticProps } from '../../utils/next'
import { BlogPostList } from './blog-post'
import { getAllFilesFrontMatter, getFiles } from '@/lib/mdx'
import { PostType } from '@/types/post'
import dynamic from 'next/dynamic'
 

const content = {
  title: 'Contentlayer Blog',
  description: `Working with content for the web shouldn't be difficult. That's why we built Contentlayer.`,
}

export const getStaticProps = defineStaticProps(async () => {
  const posts = await getAllFilesFrontMatter();

  return { props: { posts } }
})

const Blog: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
 
 
  return (
    <Container title="Blog – Contentlayer" description={content.description} urlPath="/blog">
     <div className="w-full lg:px-16 mt-12"> 
     <div className="text-center">
        <h1 className="mb-2 font-bold text-4xl">NextUI Latest Updates</h1>
        <h5 className="text-default-500 text-lg">All the latest news about NextUI.</h5>
      </div>
        <BlogPostList posts={posts} />
        {/* {JSON.stringify(posts)} */}
        </div>
    </Container>
  )
}

export default Blog
