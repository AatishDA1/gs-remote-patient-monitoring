import * as React from "react";
import Layout from "../components/General/Layout";
import Seo from "../components/General/seo";
import Simulation from "../components/Simulation/Simulation";


const SimulationPage = () => (
  <Layout>
    <Seo title="SimulationPage" />
    <Simulation />
  </Layout>
);

export default SimulationPage;

