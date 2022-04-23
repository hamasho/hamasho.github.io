import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div style={{ color: "red" }}>{children}</div>;
};

export default Layout;
