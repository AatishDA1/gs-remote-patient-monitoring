import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import GenHeader from "../components/General/GenHeader";
import GenFooter from "../components/General/GenFooter";
import PAActions from "../components/PatArchive/PAActions";

const PatientSelect = () => (
  <>
    <GlobalStyle />
    <GenHeader />
    <Seo title="ManagePatients" />
    <PAActions/>
    <GenFooter />
  </>
);
export default PatientSelect;