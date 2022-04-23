import type { NextPage } from "next";
import Head from "next/head";
import { css } from "@emotion/react";
import Layout from "../components/layout/Layout";

const Home: NextPage = () => {
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
          padding: "60px 0 0",
        })}
      >
        <h1
          css={css({
            fontSize: "2.25rem",
            padding: "0",
            margin: "0",
          })}
        >
          Hamasho&apos;s Home Page
        </h1>

        <p
          css={css({
            padding: "36px 0 24px",
            margin: "0",
            fontSize: "1.25rem",
          })}
        >
          Posts by a programmer, and a music hobbyist
        </p>
      </div>
    </Layout>
  );
};

export default Home;
