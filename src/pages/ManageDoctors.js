import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import HPHeader from "../components/HomePages/HPHeader";
import HPFooter from "../components/HomePages/HPFooter";
import MDActions from "../components/ManagingDrs/MDActions";
import ChangeBtnState from "../components/ManagingDrs/ChangeBtnState";


const ManageDoctors = () => (
    <>
        <GlobalStyle />
        <HPHeader />
        <Seo title="ManageDoctors" />
        <MDActions/>
        <ChangeBtnState/>
        <HPFooter />    
    </>
);

export default ManageDoctors;