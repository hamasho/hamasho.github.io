import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "../../src/components/layout/Layout";
import {
  getPostDetail,
  generateStaticPostPaths,
} from "../../src/services/post";
import { PostInfo } from "../../src/types";

// Custom components/renderers to pass to MDX.
const components = {};

type Props = {
  post: PostInfo;
  source: MDXRemoteSerializeResult;
};

const Page: NextPage<Props> = ({ post, source }) => {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{post.title}</h1>
        <p className="description">{post.excerpt}</p>
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
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
