import { Html, Head, Main, NextScript } from 'next/document'
// import {CssBaseline} from "@nextui-org/react";
// import { getCssText } from '@nextui-org/react/theme/stitches.config';
export default function Document() {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   const styledJSXStyles = flush();

  //   return {
  //     ...initialProps,
  //     styles: React.Children.toArray([initialProps.styles, styledJSXStyles]),
  //   };
  // }
  return (
    <Html lang="en">
        <Head>

          {/* <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} /> */}
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
