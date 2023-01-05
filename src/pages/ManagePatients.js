import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import GenHeader from "../components/General/GenHeader";
import GenFooter from "../components/General/GenFooter";
import MPActions from "../components/ManagingPats/MPActions";


const ManagePatients = () => (
    <>
        <GlobalStyle />
        <GenHeader />
        <Seo title="ManagePatients" />
        <MPActions/>
        <GenFooter />  
    </>
);

export default ManagePatients;