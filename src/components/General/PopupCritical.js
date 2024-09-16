import React from "react";
import "../Styles/Popup.css";
import { GlobalStyle } from "../Styles/GlobalStyles";
// Popup function for critical alerts
function PopupCritical(props) {
  return props.trigger ? (
    <>
      <GlobalStyle />
      <div className="popup">
        <div className="popup-inner-critical">
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

export default PopupCritical;
