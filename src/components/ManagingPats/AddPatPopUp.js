import React, { useEffect, useState } from "react";
import db from "../General/firebase";
import PatUseForm from "./PatUseForm";
import validatePats from "./validatePats";
import "../Styles/styles.css";
import "../Styles/Popup.css";

export default function AddPatPopUp(props) {
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientGender, setPatientGender] = useState("");
  const [patientBedNO, setPatientBedNO] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
  const [time, setTime] = useState([]);
  const [respRate, setRespRate] = useState([]);
  const [sysPressure, setSysPressure] = useState([]);
  const [diaPressure, setDiaPressure] = useState([]);
  const [HR, setHR] = useState([]);
  const [temp, setTemp] = useState([]);
  const [patientData, setPatientData] = useState("")
  
  // const { handleChange, handleSubmit, values, errors } = PatUseForm(
  //   // submitForm,
  //   validatePats
  // );
  
  // useEffect(() => {
  //   setPatientName(values.name)
  //   setPatientAge(values.age)
  //   setPatientGender(values.gender)
  //   setPatientBedNO(values.bedNO)
  // },[values])
  
  // add patient to firebase
  const submit = (e) => {
    e.preventDefault();
    db.collection("patientsData").add({
      name: patientName,
      age: patientAge,
      gender: patientGender,
      bedNO: patientBedNO,

      time: time,
      resp: respRate,
      temp: temp,
      sys: sysPressure,
      dia: diaPressure,
      hr: HR,
    });

    setPatientName("");
    setPatientAge("");
    setPatientGender("");
    setPatientBedNO("");

    setTime([]);
    setRespRate([]);
    setTemp([]);
    setSysPressure([]);
    setDiaPressure([]);
    setHR([]);
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
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Age"
                  value={patientAge}
                  onChange={(e) => setPatientAge(parseInt(e.target.value))}
                />
                <input
                  type="text"
                  placeholder="Gender"
                  value={patientGender}
                  onChange={(e) => setPatientGender(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Bed Number"
                  value={patientBedNO}
                  onChange={(e) => setPatientBedNO(parseInt(e.target.value))}
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
