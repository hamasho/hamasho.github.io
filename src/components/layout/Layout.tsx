import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { css } from "@emotion/react";

const bodyStyle = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const mainStyle = css`
  padding: 24px 8px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const innerStyle = css`
  max-width: 770px;
  width: 100%;
`;

const footerStyle = css`
  margin-top: auto;
`;

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div css={bodyStyle}>
      <Header />
      <main css={mainStyle}>
        <div css={innerStyle}>{children}</div>
      </main>
      <div css={footerStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
