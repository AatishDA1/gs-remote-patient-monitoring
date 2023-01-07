import React, { useState, useEffect } from "react";
import db from "../../pages/firebase";
// import "../Styles/firebasestyle.css";
import "../Styles/styles.css";
import "../Styles/Popup.css";

export default function DDocPopUp(props) {
  const [docProps, setDocProps] = useState(props);
  const [delID, setDelID] = useState("");

  useEffect(() => {
    props.info === undefined
      ? console.log("props notdefined")
      : setDocProps(props.info);
  });

  useEffect(() => {
    if (docProps === undefined) {
      console.log("doc not defined");
    } else {
      setDelID(docProps);
    }
  }, [docProps]);

  const deleteData = (e) => {
    e.preventDefault();
    for (const id of delID) {
      db.collection("DoctorsData").doc(id).delete();
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
