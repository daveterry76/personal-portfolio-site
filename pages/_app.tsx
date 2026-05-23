import "styles/index.css";

import { Layout } from "components";
import { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

const keywords = [
  "David",
  "Dappa David",
  "Frontend Engineer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "Fintech Engineer",
  "Payments Engineer",
  "Frontend Web Developer",
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="shortcut icon" href="/favicon.webp" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;