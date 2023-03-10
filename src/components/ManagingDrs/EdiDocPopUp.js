import React, { useState, useEffect } from "react";
import db from "../General/firebase";
// import "../Styles/firebasestyle.css";
import "../Styles/styles.css";
import "../Styles/Popup.css";

export default function EdiDocPopUp(props) {
  const [updatedDoctorName, setUpdatedDoctorName] = useState("");
  const [updatedDoctorOffice, setUpdatedDoctorOffice] = useState("");
  const [updatedPatientList, setUpdatedPatientList] = useState([]);
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

  const [docProps, setDocProps] = useState(props.info);

  useEffect(() => {
    props.info === undefined
      ? console.log("props notdefined")
      : setDocProps(props.info);
  });

  useEffect(() => {
    if (docProps.data === undefined) {
      console.log("pat not defined");
    } else {
      setDataIdToBeUpdated(docProps.id);
      setUpdatedDoctorName(docProps.data.name);
      setUpdatedDoctorOffice(docProps.data.office);
      setUpdatedPatientList(docProps.data.patientList);
    }
  }, [docProps]);

  const updateData = (e) => {
    db.collection("DoctorsData").doc(dataIdToBeUpdated).update({
      name: updatedDoctorName,
      office: updatedDoctorOffice,
      patientList: updatedPatientList,
    });

    setUpdatedDoctorOffice("");
    setUpdatedDoctorName("");
    setUpdatedPatientList([]);
    setDataIdToBeUpdated("");
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-addpersonnel">
        <div className="App">
          {!dataIdToBeUpdated ? (
            <div>
              ERROR
              <button
                className="aedbtnstyle"
                onClick={() => props.setTrigger(false)}
              >
                BACK
              </button>
            </div>
          ) : (
            <div>
              <button
                className="aedbtnstyle"
                onClick={() => props.setTrigger(false)}
              >
                BACK
              </button>
              <div className="App__Updateform">
                <input
                  type="text"
                  placeholder="Name"
                  value={updatedDoctorName}
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
                      setUpdatedDoctorName(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="Office #"
                  value={updatedDoctorOffice}
                  onChange={(e) => {
                    if (e.target.value.length <= 3)
                      setUpdatedDoctorOffice(e.target.value);
                  }}
                />
              </div>
              <button className="aedbtnstyle" onClick={updateData}>
                UPDATE
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
