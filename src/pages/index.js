import * as React from "react";
import Hero from "../components/Index/Hero";
import Layout from "../components/General/Layout";
import Seo from "../components/General/seo";
import Services from "../components/Index/Services";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Services />
  </Layout>
);

export default IndexPage;
