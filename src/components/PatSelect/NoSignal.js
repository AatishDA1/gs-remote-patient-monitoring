import React, { useState, useEffect } from "react";
import "../Styles/styles.css";
import "../Styles/Popup.css";

export default function NoSignal(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-addpersonnel">
        <div className="App">
          <h3>
            <p>NO SIGNAL</p>
          </h3>
          <div>
            <button
              className="aedbtnstyle"
              onClick={() => props.setTrigger(false)}
            >
              DISMISS
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
