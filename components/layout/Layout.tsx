import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import { css } from "@emotion/react";

const style = css`
  padding: 24px 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const innerStyle = css`
  max-width: 770px;
  width: 100%;
`;

const Layout: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div className={className}>
      <Header />
      <main css={style}>
        <div css={innerStyle}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
