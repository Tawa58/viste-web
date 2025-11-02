import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="UKEOPHLGjyE7mfNCLvYuSPabwJs1ZgISYXmZ3KWG7uw" />
        {/* ...existing meta tags... */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
