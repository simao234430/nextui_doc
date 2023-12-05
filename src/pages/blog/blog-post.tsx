/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

 
 
 
import {format, parseISO} from "date-fns";
import Balancer from "react-wrap-balancer";
import {AnimatePresence, motion} from "framer-motion";
import NextLink from "next/link";
import { Card, CardBody, CardFooter, CardHeader } from "@/nextui-org/react/components/card";
import { Avatar } from "@/nextui-org/react/components/avatar";
import { Link } from "@/nextui-org/react/components/link";
import { Image } from "@/nextui-org/react/components/image";
 
import { Post } from "@/types/post";
 

const BlogPostCard = (post: Post) => {
  // const isMounted = useIsMounted();

  const handlePress = () => {
    // trackEvent("BlogPostCard - Selection", {
    //   name: post.title,
    //   action: "click",
    //   category: "blog",
    //   data: post.url ?? "",
    // });
  };

  return (
    <AnimatePresence>
      {
      // isMounted && 
      (
        <motion.article
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 5}}
          initial={{opacity: 0, y: 5}}
          transition={{duration: 0.3}}
        >
          <Card
            isBlurred
            as={NextLink}
            className="p-2 h-full border-transparent text-start bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
            href={post.slug}
            // isPressable={!!post.url}
            onPress={handlePress}
          >
            <CardHeader>
              {/* <Link suppressHydrationWarning>    */}
                <Balancer suppressHydrationWarning>{post.title}</Balancer>
              {/* </Link> */}
            </CardHeader>
            <CardBody className="pt-0 px-2 pb-1">
 
              <Image className="mb-4" alt="" src={post.image} />
              <p className="font-normal w-full text-default-600">{post.description}</p>
            </CardBody>
            <CardFooter className="flex justify-between items-center">
              <time className="block text-small text-default-500" dateTime={post.date}>
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
              {/* <Avatar size="sm" src={post.author?.avatar} /> */}
            </CardFooter>
          </Card>
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export const BlogPostList = ({posts}: {posts: Post[]}) => {
  return (
    <div className="mt-10 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      {posts.map((post, idx) => (
        <BlogPostCard key={idx} {...post} />
      ))}
    </div>
  );
};
