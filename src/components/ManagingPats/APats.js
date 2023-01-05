import * as React from "react";
import "../Styles/styles.css";
import { useState } from "react";
import APpopup from "./APatpopup";

//for testing nav button

function APats(){
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
    <>
        <button className="aedbtnstyle" onClick={() => setButtonPopup(true)}> ADD</button>
        <APpopup trigger={buttonPopup} setTrigger = {setButtonPopup}></APpopup>
    </>
    )
}

export default APats;