import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
// import Image from "next/image";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Slug.module.scss";

import Markdown from "markdown-to-jsx";
// import Seo from "@/components/Seo";

export default function EventPage({ evt }) {
  return (
    <Layout>
      {/* <Seo evt={evt} /> */}

      <div className={styles.event}>
        {/* <div className={styles.image}>
          <Image
            src={evt.image.url}
            width={2260}
            height={1000}
            alt={evt.title}
          />
        </div> */}

        <hr />
        <div className={styles.emptyBox}></div>
        <div className={styles.heroTitle}>
          <h1>{evt.title}</h1>
        </div>
        <div className={styles.categoryBox}>
          <h1>Tag:</h1>
          <p>{evt.tag}</p>
          <h1>Content:</h1>
        </div>

        <div className={styles.contentBox}>
          <Markdown options={{ forceBlock: true }}>{evt.content}</Markdown>

          <Link href="/articles">
            <a className={styles.back}>{"<"}Go Back</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/articles`);
  const articles = await res.json();

  const paths = articles.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/articles?slug=${slug}`);

  const articles = await res.json();

  return {
    props: {
      evt: articles[0],
    },
  };
}
