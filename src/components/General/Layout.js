import * as React from "react";
import Header from "./Header";
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
