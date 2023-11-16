 
import { Highlight, themes } from "prism-react-renderer"
import { CodeBlockProps, HighlightedCodeTextProps } from './types';
import { calculateLinesToHighlight, hasTitle } from './utils';
import { tv } from 'tailwind-variants';
import classNames from "classnames";
 
// @ts-ignore
// (typeof global !== 'undefined' ? global : window).Prism = Prism;

/**
 * This imports the syntax highlighting style for the Swift and GLSLlanguage
 */
// require('prismjs/components/prism-swift');
// require('prismjs/components/prism-glsl');

const pre = tv({
  base:"m-0 p-0",
});
const divline = tv({
  base:"",
  variants: {
    hight: {
      true: "min-w-full  bg-transparent borderl-solid border-l-4 border-[#a855f7]  ",
    },
    line: {
      true: "min-w-full bg-[#011627] borderl-solid border-l-4 border-transparent ",
    },
  },
});
 
 
 
 
export const HighlightedCodeText = (props: HighlightedCodeTextProps) => {
  const { codeString, language, highlightLine } = props;
 
  return (
    <Highlight
    theme={themes.oneDark}
    code={codeString}
    language="tsx"
  >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={pre()} style={style}>
          {tokens.map((line, index) => {
            const { className: lineClassName } = getLineProps({
              className:
                highlightLine && highlightLine(index) ? 'highlight-line' : '',
              key: index,
              line,
            });
     
            const preClass = classNames({
              'table': true,
              'highlight-line' :    highlightLine && highlightLine(index),
              'line' :    highlightLine && !highlightLine(index)
            });
            return (
              <div
                data-testid={
                  highlightLine && highlightLine(index)
                    ? 'highlight-line'
                    : 'line'
                }
                key={index}
                // className={preClass}
                className={divline({
                  hight: highlightLine && highlightLine(index),
                  line: highlightLine && !highlightLine(index),
                })}
              >
                <span className="px-4" data-testid="number-line">{index + 1}</span>
                <span>
                  {line.map((token, key) => {
                    return (
                      <span   
                        data-testid="content-line"
                        key={key}
                        {...getTokenProps({
                          key,
                          token,
                        })}
                      />
                    );
                  })}
                </span>
              </div>
            );
          })}
        </pre>
      )}
  </Highlight>
  );
};

const CodeBlock = (props: CodeBlockProps) => {
  const { codeString, language, metastring } = props;

  const highlightLineFn = calculateLinesToHighlight(metastring);
  const title = hasTitle(metastring);
  return (
 
      <HighlightedCodeText
        codeString={codeString}
        language={language}
        highlightLine={highlightLineFn}
      />
 
  );
};

export default CodeBlock;
