import { FC, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";
import { PostInfo } from "../../types";
import Label from "../common/Label";

const PostItem: FC<{ post: PostInfo }> = ({ post }) => {
  const publishedDate = useMemo(
    () => new Date(post.publishedDate).toDateString(),
    [post.publishedDate]
  );
  return (
    <div
      css={css({
        display: "grid",
        gridTemplateColumns: "25% auto",
        gridGap: "16px",
        border: "1px solid #ADB5BD",
        bodered: "some",
        borderRadius: "6px",
        boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.2)",
        transition: "transform .2s",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: "6px 6px 4px 4px rgba(0, 0, 0, 0.2)",
        },
      })}
    >
      <div
        css={css({
          position: "relative",
          overflow: "hidden",
        })}
      >
        <Image src={post.thumbnail} alt="" layout="fill" />
      </div>

      <div
        css={css({
          padding: "8px 8px 8px 0",
        })}
      >
        <h3
          css={{
            fontSize: "1.125rem",
            fontWeight: "bold",
            paddingBottom: "6px",
          }}
        >
          {post.title}
        </h3>

        <div
          css={css({
            display: "flex",
            justifyContent: "space-between",
          })}
        >
          <span css={css({ display: "flex", gap: "6px" })}>
            {post.tags.map((t) => (
              <Label key={t} text={t} />
            ))}
          </span>
          <span>{publishedDate}</span>
        </div>
        <p css={css({ paddingTop: "8px" })}>{post.excerpt}</p>
      </div>
    </div>
  );
};

const PostList: FC<{ posts: PostInfo[] }> = ({ posts }) => {
  return (
    <div
      css={css({
        display: "grid",
        gridGap: "8px",
      })}
    >
      {posts.map((post) => (
        <Link key={post.slug} href={`/posts/${post.slug}`}>
          <a>
            <PostItem post={post} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
