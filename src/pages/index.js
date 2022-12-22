import * as React from "react";
import Hero from "../components/Index/Hero";
import Seo from "../components/General/seo";
import Services from "../components/Index/Services";
import Header from "../components/Index/Header";
import { GlobalStyle } from "../components/Styles/GlobalStyles";

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Header />
    <Seo title="Home" />
    <Hero />
    <Services />
  </>
);

export default IndexPage;
