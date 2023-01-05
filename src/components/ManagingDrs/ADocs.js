import * as React from "react";
import "../Styles/styles.css";
import { useState } from "react";
import ADpopup from "./ADocPopUp";

//for testing nav button

function ADocs(){
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
    <>
        <button className="aedbtnstyle" onClick={() => setButtonPopup(true)}> ADD</button>
        <ADpopup trigger={buttonPopup} setTrigger = {setButtonPopup}></ADpopup>
    </>
    )
}

export default ADocs;