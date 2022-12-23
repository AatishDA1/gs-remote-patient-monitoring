import * as React from "react";
import { GlobalStyle } from "../Styles/GlobalStyles";
import GenHeader from "./GenHeader";
import GenFooter from "./GenFooter";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <GenHeader />
      <main>{children}</main>
      <GenFooter />
    </>
  );
};

export default Layout;
