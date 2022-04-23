import { FC } from "react";
import Link from "next/link";
import { css } from "@emotion/react";

const headerStyle = css`
  box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.2);
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const headerInnerStyle = css`
  max-width: 770px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const logoStyle = css`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Header: FC = () => {
  return (
    <div css={headerStyle}>
      <div css={headerInnerStyle}>
        <span css={logoStyle}>
          <Link href="/">HOME</Link>
        </span>
        <div>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
