import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import HPHeader from "../components/HomePages/HPHeader";
import HPFooter from "../components/HomePages/HPFooter";
import MPActions from "../components/ManagingPats/MPActions";
import MPheading from "../components/ManagingPats/MPheading";


const ManagePatients = () => (
    <>
        <GlobalStyle />
        <HPHeader />
        <Seo title="ManagePatients" />
        <MPheading/>
        <MPActions/>
        <HPFooter />    
    </>
);

export default ManagePatients;