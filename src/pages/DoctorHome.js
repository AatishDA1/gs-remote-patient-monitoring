import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import HPHeader from "../components/HomePages/HPHeader";
import HPFooter from "../components/HomePages/HPFooter";
import AdminBtns from "../components/HomePages/DoctorBtns";

const DoctorHome = () => (
  <>
    <GlobalStyle />
    <HPHeader />
    <Seo title="DoctorHome" />
    <AdminBtns />
    <HPFooter />
  </>
);

export default DoctorHome;
