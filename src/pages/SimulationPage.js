import * as React from "react";
import Layout from "../components/General/Layout";
import Seo from "../components/General/seo";
import Simulation from "../components/Simulation/Simulation";
import PatNavbar from "../components/Simulation/PatNavBar";

const SimulationPage = () => (
  <Layout>
    <PatNavbar/>
    <Seo title="SimulationPage" />
    <Simulation />
  </Layout>
);

export default SimulationPage;
