import React, { useState } from "react";
import db from "../General/firebase";
import "../Styles/styles.css";
import "../Styles/Popup.css";
import RandomRespRate, {RandomDias, RandomHR, RandomSys, RandomTemp} from "../Simulation/SimDataNorm";

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
  // it would save around 700 values everytime a patient is added but this is only initiallizing here
  respRate.push(RandomRespRate())
  temp.push(RandomTemp())
  sysPressure.push(RandomSys())
  diaPressure.push(RandomDias())
  HR.push(RandomHR())

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
                  //onKeyPress={event => (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)}
                  placeholder="Name"
                  value={patientName}
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
                      setPatientName(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="Age"
                  value={patientAge}
                  onChange={(e) => {
                    if (e.target.value.length <= 3)
                      setPatientAge(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Gender (F/M)"
                  value={patientGender}
                  onChange={(e) => {
                    const finalChar = e.target.value.charCodeAt(
                      e.target.value.length - 1
                    );
                    if (
                      (finalChar === 70 && e.target.value.length === 1) ||
                      (finalChar === 77 && e.target.value.length === 1) ||
                      isNaN(finalChar)
                    )
                      setPatientGender(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="Bed Number"
                  value={patientBedNO}
                  onChange={(e) => {
                    if (e.target.value.length <= 4)
                      setPatientBedNO(e.target.value);
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