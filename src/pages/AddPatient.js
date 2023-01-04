import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import GenHeader from "../components/General/GenHeader";
import GenFooter from "../components/General/GenFooter";
import MPActions from "../components/ManagingPats/MPActions";
import MPheading from "../components/ManagingPats/MPheading";
import "../components/Styles/styles.css";
import PatientAdd from "./PatientAdd";
import { useState } from "react";

//for testing nav button

function AddPatient(){
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
    <>
        <button className="aedbtnstyle" onClick={() => setButtonPopup(true)}> ADD</button>
        <PatientAdd trigger={buttonPopup} setTrigger = {setButtonPopup}></PatientAdd>
    </>
    )
}

export default AddPatient;