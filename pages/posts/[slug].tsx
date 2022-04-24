import { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { css } from "@emotion/react";
import Layout from "../../src/components/layout/Layout";
import {
  getPostDetail,
  generateStaticPostPaths,
} from "../../src/services/post";
import { PostInfo } from "../../src/types";

// Custom components/renderers to pass to MDX.
const components = { Image };

const articleStyle = css`
  h1 {
    margin-bottom: 0;
  }
  .excerpt {
    opacity: 0.6;
  }
`;

type Props = {
  post: PostInfo;
  source: MDXRemoteSerializeResult;
};

const Page: NextPage<Props> = ({ post, source }) => {
  return (
    <Layout>
      <div css={articleStyle}>
        <h1>{post.title}</h1>
        <p className="excerpt">{post.excerpt}</p>
        <MDXRemote {...source} components={components} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const result = await getPostDetail(String(params?.slug));
  return {
    props: {
      source: result.source,
      post: result.post,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = generateStaticPostPaths().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Page;
