import { css } from "@emotion/react";
import Link from "next/link";
import { GitHub } from "react-feather";

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px 48px;
`;

const hrStyle = css`
  width: 100%;
  margin-bottom: 32px;
`;

const linkListStyle = css`
  display: flex;
  gap: 8px;
  list-style-type: none;
  padding: 0;
  margin: 4px 0;
`;

const linkItemStyle = css`
  display: block;
  font-size: 20px;
  padding: 0;
  margin: 0;
`;

const Footer = () => {
  return (
    <footer css={wrapperStyle}>
      <hr css={hrStyle} />
      <div css={linkListStyle}>
        <a href="https://github.com/hamasho">
          <GitHub />
        </a>
      </div>
      <ul css={linkListStyle}>
        <li css={linkItemStyle}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li css={linkItemStyle}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
