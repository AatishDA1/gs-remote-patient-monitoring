import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import GenHeader from "../components/General/GenHeader";
import GenFooter from "../components/General/GenFooter";
import MPActions from "../components/ManagingPats/MPActions";
import InitialSearchState from "../components/ManagingPats/InitialSearchState";


const ManagePatients = () => (
    <>
        <GlobalStyle />
        <GenHeader />
        <Seo title="ManagePatients" />
        <MPActions/>
        {/* <InitialSearchState/> */}
        <GenFooter />  
    </>
);

export default ManagePatients;