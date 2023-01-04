import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import HPHeader from "../components/HomePages/HPHeader";
import GenFooter from "../components/General/GenFooter";
import AlertTable from "../components/General/AlertTable";

const AlertHistory = () =>(
    <>
        <GlobalStyle/>
        <HPHeader/>
        <Seo title="AlertHistory" />
        <AlertTable />
        <GenFooter/>

    </>
);

export default AlertHistory;