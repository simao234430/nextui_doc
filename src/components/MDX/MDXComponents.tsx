import dynamic from 'next/dynamic';
import Code from '../common/Code';
 

const MDXComponents = {
  // Replace the default anchor tag by the Anchor component with underline set to true: this is the default link
 
   pre:Code,
 
};

export default MDXComponents;
