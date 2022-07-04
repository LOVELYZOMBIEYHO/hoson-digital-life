import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Seopage from "@/components/Seopage";

export default function about() {
  return (
    <Layout>
      <Seopage />
      <div className="m-8">
        <h1 className="text-red-600">About me</h1>
        <p>
          It is a blog used with NextJS and Strapi for me to record my learned
          and my new ideas of web development and digital marketing.
        </p>
        <p>Please feel free to read my blog! </p>
      </div>
    </Layout>
  );
}
