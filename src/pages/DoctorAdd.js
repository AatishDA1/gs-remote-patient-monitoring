
import React, { useState, useEffect } from "react";
import db from "./firebase";
import DoctorManagePage from "../components/HomePages/DoctorManagePage";

function DoctorAdd(){
	// access database here
    const [DoctorName, setDoctorName] = useState("");
    const [DoctorOffice, setDoctorOffice] = useState("");
	const [DoctorPatientList, setDoctorPatientList] = useState([]);
    const [DoctorsData, setDoctorsData] = useState([]);
	const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

	useEffect(() => {
        db.collection("DoctorsData").onSnapshot((snapshot) => {
        setDoctorsData(
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
        db.collection("DoctorsData").add({
        name: DoctorName,
        office: DoctorOffice,
		patientlist: DoctorPatientList,
  
        });
        setDoctorName("");
        setDoctorOffice("");
		setDoctorPatientList([]);
        
    };
	return(
		<div className="App">
		<DoctorManagePage/>
		{!dataIdToBeUpdated && (
			<div className="App__form">
				<input
					type="text"
					placeholder="Name"
					value={DoctorName}
					onChange={(e) => setDoctorName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Office"
					value={DoctorOffice}
					onChange={(e) => setDoctorOffice(e.target.value)}
				/>
				<button onClick={submit}>Submit</button>
			</div>
		)}
		</div>
	)}

export default DoctorAdd;
