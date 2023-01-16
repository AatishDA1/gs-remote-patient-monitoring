import React, { useState, useEffect } from "react";
import db from "../General/firebase";
// import "../Styles/firebasestyle.css";
import "../Styles/styles.css";
import "../Styles/Popup.css";

export default function EdiPatPopUp(props) {
  const [updatedPatientName, setUpdatedPatientName] = useState("");
  const [updatedPatientAge, setUpdatedPatientAge] = useState("");
  const [updatedPatientGender, setUpdatedPatientGender] = useState("");
  const [updatedPatientBedNO, setUpdatedPatientBedNO] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

  const [patProps, setPatProps] = useState(props.info);

  useEffect(() => {
    props.info === undefined
      ? console.log("props notdefined")
      : setPatProps(props.info);
  });

  useEffect(() => {
    if (patProps.data === undefined) {
      console.log("pat not defined");
    } else {
      setDataIdToBeUpdated(patProps.id);
      setUpdatedPatientAge(patProps.data.age);
      setUpdatedPatientName(patProps.data.name);
      setUpdatedPatientGender(patProps.data.gender);
      setUpdatedPatientBedNO(patProps.data.bedNO);
    }
  }, [patProps]);

  const updateData = (e) => {
    db.collection("patientsData").doc(dataIdToBeUpdated).update({
      name: updatedPatientName,
      age: updatedPatientAge,
      gender: updatedPatientGender,
      bedNO: updatedPatientBedNO,
    });

    setUpdatedPatientAge("");
    setUpdatedPatientName("");
    setUpdatedPatientGender("");
    setUpdatedPatientBedNO("");
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
                  value={updatedPatientName}
                  onChange={(e) => {
                    const finalChar = e.target.value.charCodeAt(e.target.value.length - 1);
                    if ((finalChar >= 65 && finalChar <= 90) || (finalChar >= 97 && finalChar <= 122) || finalChar === 32 || isNaN(finalChar)) setUpdatedPatientName(e.target.value)}
                  }/>
                <input
                  type="text"
                  placeholder="Age"
                  value={updatedPatientAge}
                  onChange={(e) =>{
                    if (e.target.value.length <= 3) setUpdatedPatientAge(e.target.value)}}
                />
                <input
                  type="text"
                  placeholder="Gender"
                  value={updatedPatientGender}
                  onChange={(e) => {
                    const finalChar = e.target.value.charCodeAt(e.target.value.length-1);
                    if ((finalChar === 70 && e.target.value.length ===1) || (finalChar === 77 && e.target.value.length ===1   || isNaN(finalChar)))setUpdatedPatientGender(e.target.value)}}
                />
                <input
                  type="text"
                  placeholder="Bed Number"
                  value={updatedPatientBedNO}
                  onChange={(e) => {
                    if(e.target.value.length <= 4) setUpdatedPatientBedNO(e.target.value)}}
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