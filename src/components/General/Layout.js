import * as React from "react";
import Header from "../Index/Header.js";
import { GlobalStyle } from "../Styles/GlobalStyles";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
