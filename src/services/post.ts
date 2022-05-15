import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { PostInfo } from "../types";

const POSTS_PATH = path.join(process.cwd(), "posts");

const getTags = (s: string): string[] => {
  return s
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t !== "");
};

const getPostInfo = (data: any): Omit<PostInfo, "slug"> => {
  const tags = typeof data.tags === "undefined" ? [] : getTags(data.tags);

  return {
    title: String(data.title ?? ""),
    excerpt: String(data.excerpt ?? ""),
    thumbnail: String(data.thumbnail ?? ""),
    tags,
    publishedDate: String(data.publishedDate ?? ""),
  };
};

export const getPostsFromFilesystem = (): PostInfo[] => {
  const files = fs.readdirSync(POSTS_PATH);
  const posts = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join(POSTS_PATH, filename),
        "utf-8"
      );
      const { data } = matter(markdownWithMeta);
      const post = getPostInfo(data);

      return {
        slug: filename.split(".")[0],
        ...post,
      };
    })
    .filter((p) => p.publishedDate !== "");

  // Sort by published date. Recently posts are on top.
  const sortedPosts = [...posts].sort((p1, p2) => {
    if (p1 === p2) return 0;
    return p1 > p2 ? 1 : -1;
  });

  return sortedPosts;
};

type GetPostDetailResult = {
  post: PostInfo;
  source: MDXRemoteSerializeResult;
};

export const getPostDetail = async (
  slug: string
): Promise<GetPostDetailResult> => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const text = fs.readFileSync(postFilePath);

  const { content, data } = matter(text);

  const source = await serialize(content);
  const post = getPostInfo(data);

  return {
    post: {
      slug,
      ...post,
    },
    source,
  };
};

export const generateStaticPostPaths = (): string[] => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((filename) => /\.mdx?$/.test(filename))
    .map((filename) => filename.replace(/\.mdx?$/, ""));
};
