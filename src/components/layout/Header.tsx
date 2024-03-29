import { FC } from "react";
import Link from "next/link";
import { css } from "@emotion/react";
import { colors } from "../../styles/constants";

const headerStyle = css`
  box-shadow: 0px 4px 6px 6px rgba(0, 0, 0, 0.2);
  padding: 12px 8px;
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
  color: ${colors.blue};
`;

const Header: FC = () => {
  return (
    <header css={headerStyle}>
      <nav css={headerInnerStyle}>
        <span css={logoStyle}>
          <Link href="/">HOME</Link>
        </span>
        <div>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
