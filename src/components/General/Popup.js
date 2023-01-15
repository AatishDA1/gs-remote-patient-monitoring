import React from "react";
import "../Styles/Popup.css";
import { GlobalStyle } from "../Styles/GlobalStyles";

// Popup component - engages alert popup and dismiss button
function Popup(props) {
  return props.trigger ? (
    <>
      <GlobalStyle />
      <div className="popup">
        <div className="popup-inner-warning"> 
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            {" "}
            Dismiss{" "}
          </button>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default Popup;
