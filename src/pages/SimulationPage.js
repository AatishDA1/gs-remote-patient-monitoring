import * as React from "react";
import Layout from "../components/General/Layout";
import Seo from "../components/General/seo";
import AddSimData from "../components/Simulation/AddSimData";
// import SimDB from "../components/Simulation/SimDB";
import Simulation from "../components/Simulation/Simulation";

const SimulationPage = () => (
  <Layout>
    <AddSimData/>
    <Seo title="SimulationPage" />
    <Simulation />
  </Layout>
);

export default SimulationPage;
