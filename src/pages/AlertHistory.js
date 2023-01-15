import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import GenHeader from "../components/General/GenHeader"
import GenFooter from "../components/General/GenFooter";
import CritActions from "../components/Simulation/CritActions";
const AlertHistory = () =>(
    <>
        <GlobalStyle/>
        <GenHeader/>
        <Seo title="AlertHistory" />
        <CritActions />
        <GenFooter/>

    </>
);

export default AlertHistory;