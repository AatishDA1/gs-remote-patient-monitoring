import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import GenHeader from "../components/General/GenHeader";
import GenFooter from "../components/General/GenFooter";
import MDActions from "../components/ManagingDrs/MDActions";


const ManageDoctors = () => (
    <>
        <GlobalStyle />
        <GenHeader />
        <Seo title="ManageDoctors" />
        <MDActions/>
        <GenFooter />    
    </>
);

export default ManageDoctors;