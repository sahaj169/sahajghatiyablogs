import React, { Fragment, ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
