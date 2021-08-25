// import Layout from "@/components/Layout";
// import Eventitem from "@/components/Eventitem";
// // {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json
// import { API_URL } from "@/config/index";

// export default function EvensPage({ events }) {
//   console.log(events);
//   return (
//     <Layout>
//       <h1>All Movies</h1>

//       {events.length === 0 && <h3>No events to show</h3>}
//       {/* 將events 的數據取出放在evt 中,使Eventitem.js 可用evt讀取 */}
//       {events.map((evt) => (
//         <Eventitem key={evt.id} evt={evt} />
//       ))}
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/articles?_sort=date:DESC`);
//   const events = await res.json();
//   console.log(events);
//   return {
//     // 這裡用Props是因為data現在在server side 需在function Home中output
//     props: { events },
//     revalidate: 1,
//   };
// }

import Link from "next/link";
import Layout from "@/components/Layout";
import Eventitem from "@/components/Eventitem";
// {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json

import { API_URL } from "@/config/index";
import Seopage from "@/components/Seopage";

export default function Home({ articles }) {
  return (
    <Layout>
      <Seopage />
      <h1 className="text-center my-8 text-red-600">All articles</h1>{" "}
      {articles.length === 0 && <h3>No events to show</h3>}
      {/* 將events 的數據取出放在evt 中,使Eventitem.js 可用evt讀取 */}
      {articles.map((evt) => (
        <Eventitem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/articles?_sort=date:DESC`);
  const articles = await res.json();

  return {
    // 這裡用Props是因為data現在在server side 需在function Home中output

    props: { articles },
    revalidate: 1,
  };
}
