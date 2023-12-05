import { Container } from "@/components/common/Container";
import { Post, ReadingTime } from "@/types/post";

interface Props {
  children: React.ReactNode;
  // frontMatter: Post & { readingTime: ReadingTime };
 
}

 

const BlogLayout = ({ children }: Props) => {
  return (
    <Container>
     {children}
    </Container>
  );
};

export default BlogLayout;
