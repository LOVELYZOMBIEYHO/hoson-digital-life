import Head from "next/head";

export default function Seo({ evt }) {
  return (
    <Head>
      <title>{evt.title}</title>
      <meta name="description" content={evt.description} />
      <meta property="og:locale" content="en-CA" />
      <meta property="og:title" content={evt.title} />
      <meta property="og:description" content={evt.description} />
      {/* url need to be updated with the new domain */}
      <meta property="og:url" content={`/articles/${evt.slug}`} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Hoson's Digital Life" />
      <meta property="article:published_time" content={evt.published_at} />
      <meta property="article:modified_time" content={evt.updated_at} />
      <meta property="og:image" content={evt.image.url} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
