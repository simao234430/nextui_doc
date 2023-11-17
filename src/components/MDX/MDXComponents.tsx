import dynamic from 'next/dynamic';
import Code from '../common/Code';
import { Callout } from '../common/Callout';
import { Card } from '../common/Card';
import { Link } from '../common/Link';
import { ChevronLink } from '../common/ChevronLink';
import { Label } from '../common/Label';
import { Dashed } from '../landing-page/Dashed';
import { BenchmarkResults } from '../blog/BenchmarkResults';
import { ContentStack } from '../blog/ContentStack';
import { BulletList, BulletListItem } from '../blog/BulletList';
import { Video } from '../landing-page/Video';
import { TLDR } from '../blog/TLDR';
import { Support } from '../landing-page/Support';
import { DataTransformation } from '../landing-page/DataTransformation';
import { H2, H3, H4 } from '../common/Headings';
 
const P: React.FC<React.PropsWithChildren<{}>> = ({ children }) => <div className="mb-4">{children}</div>
const AdvancedFramerMotionSandpack = dynamic(
  () => import('./Widgets/AdvancedFramerMotion/Sandpack')
);

const customComponents = {
  AdvancedFramerMotionSandpack,
}
const MDXComponents = {
  // Replace the default anchor tag by the Anchor component with underline set to true: this is the default link
  Callout,
  Card,
 
  Link,
  ChevronLink,
  Label,
  h2: H2,
  h3: H3,
  h4: H4,
  a: Link,
  p: P,

  BulletList,
  BulletListItem,
 
  Video,
  TLDR,
  ContentStack,
  Support,
  BenchmarkResults,
  Dashed,
  pre:Code,
  ...customComponents
};

export default MDXComponents;
