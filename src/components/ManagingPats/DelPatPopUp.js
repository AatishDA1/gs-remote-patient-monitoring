import React, { useState, useEffect } from "react";
import db from "../General/firebase";
// import "../Styles/firebasestyle.css";
import "../Styles/styles.css";
import "../Styles/Popup.css";

export default function DelPatPopUp(props) {
  const [patProps, setPatProps] = useState(props);
  const [delID, setDelID] = useState("");

  useEffect(() => {
    props.info === undefined
      ? console.log("props notdefined")
      : setPatProps(props.info);
  });

  useEffect(() => {
    if (patProps === undefined) {
      console.log("pat not defined");
    } else {
      setDelID(patProps);
    }
  }, [patProps]);

  const deleteData = (e) => {
    e.preventDefault();
    for (const id of delID) {
      db.collection("patientsData").doc(id).delete();
    }
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-addpersonnel">
        <div className="App">
          <p>Are you sure?</p>
          <div>
            <button className="aedbtnstyle" onClick={deleteData}>
              DELETE
            </button>
            <button
              className="aedbtnstyle"
              onClick={() => props.setTrigger(false)}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
