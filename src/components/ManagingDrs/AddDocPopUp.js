import React, { useState, useEffect } from "react";
import db from "../General/firebase";
import "../Styles/styles.css";
import "../Styles/Popup.css";

export default function AddDocPopUp(props) {
  const [doctorName, setDoctorName] = useState("");
  const [doctorOffice, setDoctorOffice] = useState("");
  const [patientList, setPatientList] = useState([]);
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

  const submit = (e) => {
    e.preventDefault();
    db.collection("DoctorsData").add({
      name: doctorName,
      office: doctorOffice,
      patientList: patientList,
    });
    setDoctorName("");
    setDoctorOffice("");
    setPatientList([]);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-addpersonnel">
        <div className="App">
          {!dataIdToBeUpdated && (
            <div>
              <button
                className="aedbtnstyle"
                onClick={() => props.setTrigger(false)}
              >
                BACK
              </button>
              <div className="App__form">
                <input
                  type="text"
                  placeholder="Name"
                  value={doctorName}
                  onChange={(e) => {
                    const finalChar = e.target.value.charCodeAt(
                      e.target.value.length - 1
                    );
                    if (
                      (finalChar >= 65 && finalChar <= 90) ||
                      (finalChar >= 97 && finalChar <= 122) ||
                      finalChar === 32 ||
                      isNaN(finalChar)
                    )
                      setDoctorName(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="Office #"
                  value={doctorOffice}
                  onChange={(e) => {
                    if (e.target.value.length <= 3)
                      setDoctorOffice(e.target.value);
                  }}
                />
              </div>
              <button className="aedbtnstyle" onClick={submit}>
                Submit
              </button>
              <button
                className="aedbtnstyle"
                onClick={() => props.setTrigger(false)}
              >
                CANCEL
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
