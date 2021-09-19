import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import Storyblok from "@service/storyblok";
import Layout from "@components/Layout";
import Page from "@components/Page";

const Home: NextPage = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    Storyblok.get("cdn/stories/home", {
      version: "draft",
    })
      .then((response) => {
        setContent(response.data.story.content);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Storyblok</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <a href="https://github.com/AlexShan2008/next-storyblok">
              Next Storyblok!
            </a>
          </h1>

          <Page content={content} />
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </Layout>
    </div>
  );
};

export default Home;
