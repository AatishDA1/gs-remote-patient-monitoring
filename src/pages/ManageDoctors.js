import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import GenHeader from "../components/General/GenHeader";
import GenFooter from "../components/General/GenFooter";
import MDHeading from"../components/ManagingDrs/MDHeading"
import MDActions from "../components/ManagingDrs/MDActions";
import ChangeBtnState from "../components/ManagingDrs/ChangeBtnState";


const ManageDoctors = () => (
    <>
        <GlobalStyle />
        <GenHeader />
        <Seo title="ManageDoctors" />
        <MDHeading/>
        <MDActions/>
        <GenFooter />    
    </>
);

export default ManageDoctors;