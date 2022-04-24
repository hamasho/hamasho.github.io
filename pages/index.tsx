import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { css } from "@emotion/react";
import Layout from "../src/components/layout/Layout";
import PostList from "../src/components/post/PostList";
import { getPostsFromFilesystem } from "../src/services/post";
import { PostInfo } from "../src/types";

type Props = {
  posts: PostInfo[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Hamasho&apos;s Home Page</title>
        <meta name="description" content="Hamasho's Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "90px 0 0",
        })}
      >
        <h1
          css={css({
            fontSize: "3.5rem",
            fontWeight: "bold",
            padding: "0",
            margin: "0",
          })}
        >
          Hamasho&apos;s Home Page
        </h1>

        <p
          css={css({
            padding: "70px 0 50px",
            margin: "0",
            fontSize: "1.5rem",
          })}
        >
          Posts by a programmer, and a music hobbyist
        </p>
      </div>

      <section>
        <h2
          css={css({
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            paddingBottom: "20px",
          })}
        >
          Recent Posts
        </h2>
        <PostList posts={posts} />
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getPostsFromFilesystem();
  return { props: { posts } };
};

export default Home;
