import React, { useEffect, useState } from "react";
import db from "../General/firebase";
import "../Styles/styles.css";
import "../Styles/Popup.css";
import RandomRespRateCcrit, {
  RandomTempCcrit,
  RandomSysCcrit,
  RandomDiasCcrit,
  RandomHRCcrit
} from "./SimCritExtract";
import { ProgressBar } from "react-bootstrap";

export default function SimAddActions(props) {
  // defines useStates 
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
  const timevar = new Date()
  const timestring = timevar.toLocaleTimeString()

  const [respvar, setrespvar] = useState('')
  const [sysvar, setsysvar] = useState('')
  const [diasvar, setdiasvar] = useState('')
  const [tempvar, setTempvar] = useState('')
  const [hrvar, sethrvar] = useState('')
  const [timevar2, setTimevar2] = useState('')
  useEffect(() =>{  
    setrespvar(respRate[0])
  }, [respRate]
  )
  useEffect(() =>{  
    setdiasvar(diaPressure[0])
  }, [diaPressure]
  )
  useEffect(() =>{  
    setsysvar(sysPressure[0])
  }, [sysPressure]
  )
  useEffect(() =>{  
    setTempvar(temp[0])
  }, [temp]
  )
  useEffect(() =>{  
    sethrvar(HR[0])
  }, [HR]
  )
  useEffect(() =>{  
    setTimevar2(timestring.slice(0,10))
  }, [timestring]
  )
  

  useEffect(() =>{ 
  setPatientName("Sim-Critical")
  setPatientAge("Sim")
  setPatientGender("Sim")
  setPatientBedNO("Sim")
 
})
  respRate.push(RandomRespRateCcrit())
  sysPressure.push(RandomSysCcrit())
  diaPressure.push(RandomDiasCcrit())
  temp.push(RandomTempCcrit())
  HR.push(RandomHRCcrit())
  time.push(timestring)

  // if (respRate.length >1) {setRespRate(respRate[1])}

  // Alert values pushed to firebase here
  console.log(typeof(AlertTime))
  console.log(timestring)
  const submit = (e) => {
    e.preventDefault();
    db.collection("simAlertData").add({
      name: patientName,
      age: patientAge,
      gender: patientGender,
      bedNO: patientBedNO,
      time: timevar2,
      resp: respvar,
      temp: tempvar,
      sys: sysvar,
      dia: diasvar,
      hr: hrvar,
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
    props.setTrigger(false)
  };
  
  return props.trigger ? (
    <>
      <div>
        {!dataIdToBeUpdated && (
          <div>
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
    </>
  ) : (
    ""
  );
}