import Link from "next/link";
import Layout from "@/components/Layout";
import Eventitem from "@/components/Eventitem";
import Showcase from "@/components/Showcase";
// import Card from "@/components/Card";
// {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json

import Seopage from "@/components/Seopage";
import { API_URL } from "@/config/index";

export default function Home({ articles }) {
  return (
    <Layout>
      <Seopage />
      <div>
        <Showcase />
        {articles.length === 0 && <h3>No articles to show</h3>}
        <div className="inline-block">
          {articles.map((evt) => (
            <Eventitem key={evt.id} evt={evt} />
          ))}
        </div>
        <div className="w-full text-center my-5">
          {articles.length > 0 && (
            <Link href="/articles">
              <a className="btn-secondary align-center-with-div">
                View All Articles
              </a>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/articles?_sort=date:DESC&_limit=10`);
  const articles = await res.json();

  return {
    // 這裡用Props是因為data現在在server side 需在function Home中output

    props: { articles },
    revalidate: 1,
  };
}
