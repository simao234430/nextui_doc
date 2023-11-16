import { Container } from "@/components/common/Container";

interface Props {
  children: React.ReactNode;
  frontMatter: Post & { readingTime: ReadingTime };
 
}

 

const BlogLayout = ({ children, frontMatter }: Props) => {
 

  return (
    <Container
 
    >
         {children}
    </Container>
  );
};

export default BlogLayout;
