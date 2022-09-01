import { ReactNode } from "react";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
