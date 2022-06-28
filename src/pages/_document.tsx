import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    const { locale } = this.props;
    return (
      <Html lang={locale}>
        <Head />
        <body className="m-0 p-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
