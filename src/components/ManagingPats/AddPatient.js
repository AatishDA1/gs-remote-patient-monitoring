import React, { useState, useEffect } from "react";
import db from "./firebase";
import "../Styles/styles.css";

function PatientAdd(){
	// access database here
    const [patientName, setPatientName] = useState("");
    const [patientAge, setPatientAge] = useState("");
    const [patientGender, setPatientGender] = useState("");
    const [patientBedNO, setPatientBedNO] = useState("");

    const [patientsData, setPatientsData] = useState([]);
	const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
	const [time, setTime] = useState([]);
	const [respRate, setRespRate] = useState([]);
	const [sysPressure, setSysPressure] = useState([]);
	const [diaPressure, setDiaPressure] = useState([]);
	const [HR, setHR] = useState([]);
	const [temp, setTemp] = useState([]);


	useEffect(() => {
        db.collection("patientsData").onSnapshot((snapshot) => {
        setPatientsData(
            snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            }))
        );
        });
        }, 
    []);

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
		hr: HR
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
	return(
		<div className="App">
		<button className="aedbtnstyle" disabled={total!==0} onClick={() => navigate("/ManagePatient")}>back</button>
		{!dataIdToBeUpdated && (
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
					onChange={(e) => setPatientAge(e.target.value)}
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
					onChange={(e) => setPatientBedNO(e.target.value)}
				/>

				<button onClick={submit}>Submit</button>
			</div>
		)}
		</div>
	)}

export default PatientAdd;
