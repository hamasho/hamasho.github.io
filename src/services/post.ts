import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostInfo } from "../types";

const getTags = (s: string): string[] => {
  return s
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t !== "");
};

export const getPostsFromFilesystem = (): PostInfo[] => {
  const base = path.join(process.cwd(), "pages", "posts");
  const files = fs.readdirSync(base);
  const posts = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join(base, filename),
        "utf-8"
      );
      const { data } = matter(markdownWithMeta);
      const tags = typeof data.tags === "undefined" ? [] : getTags(data.tags);

      return {
        slug: filename.split(".")[0],
        title: String(data.title ?? ""),
        excerpt: String(data.excerpt ?? ""),
        thumbnail: String(data.thumbnail ?? ""),
        tags,
        publishedDate: String(data.publishedDate ?? ""),
      };
    })
    .filter((p) => p.publishedDate !== "");

  return posts;
};
