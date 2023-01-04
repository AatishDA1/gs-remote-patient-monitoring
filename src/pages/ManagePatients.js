import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import GenHeader from "../components/General/GenHeader";
import GenFooter from "../components/General/GenFooter";
import MPActions from "../components/ManagingPats/MPActions";
import MPheading from "../components/ManagingPats/MPheading";
import InitialSearchState from "../components/ManagingPats/InitialSearchState";
import AddPatient from "./AddPatient";


const ManagePatients = () => (
    <>
        <GlobalStyle />
        <GenHeader />
        <Seo title="ManagePatients" />
        <MPheading/>
        <MPActions/>
        <InitialSearchState/>
        <GenFooter />  
    </>
);

export default ManagePatients;