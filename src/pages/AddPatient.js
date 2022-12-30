import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import GenHeader from "../components/General/GenHeader";
import GenFooter from "../components/General/GenFooter";
import MPActions from "../components/ManagingPats/MPActions";
import MPheading from "../components/ManagingPats/MPheading";


const AddPatient = () => (
    <>
        <GlobalStyle />
        <GenHeader />
        <Seo title="AddPatient" />
        <GenFooter />    
    </>
);

export default AddPatient;