import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          日台中🇯🇵🇹🇼🇨🇳の架け橋を目指す 國立政治大學 to 金沢大学 #日本留学
          #金沢大学 #台湾人 #コロナに負けるな #理科生 #Blockchain
        </p>
        <p>
          (Follow <a href="https://twitter.com/mecyasugoi">my twitter</a>.)
        </p>
      </section>
    </Layout>
  );
}
