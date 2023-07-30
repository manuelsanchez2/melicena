import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en' data-theme='cupcake'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            data-goatcounter='https://melicena.goatcounter.com/count'
            async
            src='//gc.zgo.at/count.js'
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
