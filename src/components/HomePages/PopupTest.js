import React, { useState } from "react";
import Popup from "../General/Popup";
import PopupCritical from "../General/PopupCritical";
import AlertTime from "../General/AlertTime";

function PopupTest() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonCritPopup, setButtonCritPopup] = useState(false);
  return (
    <>
      <button onClick={() => setButtonPopup(true)}> Warning Alert</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2>
          {" "}
          Warning at Time: <AlertTime />{" "}
        </h2>
        <h2> Vital X of Patient Y nearing Z threshold </h2>
      </Popup>
      <br></br>
      <button onClick={() => setButtonCritPopup(true)}> Critical Alert</button>
      <PopupCritical trigger={buttonCritPopup} setTrigger={setButtonCritPopup}>
        <h2>
          {" "}
          Warning at Time: <AlertTime />{" "}
        </h2>
        <h2> Vital X of Patient Y exceeded Z threshold </h2>
      </PopupCritical>
    </>
  );
}

export default PopupTest;
