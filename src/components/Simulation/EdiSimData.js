import React, { useState, useEffect } from "react";
import db from "../General/firebase";
// import "../Styles/firebasestyle.css";
import "../Styles/styles.css";
import "../Styles/Popup.css";
import { respR, tempR, sysR, diasR, heartR } from "./SimDataNorm";


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
}