import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";

import Popup from '../components/General/popupPTV'

import PatientAddButton from  "../components/HomePages/PatientAddButton";

function PatientManage(){
	const [buttonPopup, setButtonPopup] = useState(false);
    const [patientsData, setPatientsData] = useState([]);
	const [updatedPatientName, setUpdatedPatientName] = useState("");
	const [updatedPatientAge, setUpdatedPatientAge] = useState("");
	const [updatedPatientGender, setUpdatedPatientGender] = useState("");
	const [updatedPatientBedNO, setUpdatedPatientBedNO] = useState("");
	const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");


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


	const updateData = (e) => {
		e.preventDefault();
		db.collection("patientsData").doc(dataIdToBeUpdated).update({
		name: updatedPatientName,
		age: updatedPatientAge,
		gender: updatedPatientGender,
		bedNO: updatedPatientBedNO
		});
	
		setUpdatedPatientAge("");
		setUpdatedPatientName("");
		setUpdatedPatientGender("");
		setUpdatedPatientBedNO("");
		setDataIdToBeUpdated("");
	};


	const deleteData = (id) => {
        db.collection("patientsData").doc(id).delete(); }

	return (<>

	<div className="App">
	{!dataIdToBeUpdated ? (
		
		<div className="App__buttons">
		<PatientAddButton/>
		</div>
		) : (
		<div className="App__Updateform">
		<input
			type="text"
			placeholder="Name"
			value={updatedPatientName}
			onChange={(e) => setUpdatedPatientName(e.target.value)}
		/>
		<input
			type="text"
			placeholder="Age"
			value={updatedPatientAge}
			onChange={(e) => setUpdatedPatientAge(e.target.value)}
		/>
		<input
			type="text"
			placeholder="Gender"
			value={updatedPatientGender}
			onChange={(e) => setUpdatedPatientGender(e.target.value)}
		/>
				<input
			type="text"
			placeholder="Bed Number"
			value={updatedPatientBedNO}
			onChange={(e) => setUpdatedPatientBedNO(e.target.value)}
		/>
		<button onClick={updateData}>Update</button>
		</div>
		)}


	  <div className="App__DataDisplay">
		<table>
			<tr>
			<th>NAME</th>
			<th>AGE</th>
			<th>GENDER</th>
			<th>BED NUMBER</th>
			<th>Update</th>
			<th>Delete</th>
			<th>View Details</th>
			<th>Select</th>
			</tr>

			{patientsData?.map(({ id, data }) => (
			<tr key={id}>
			<td>{data.name}</td>
			<td>{data.age}</td>
			<td>{data.gender}</td>
			<td>{data.bedNO}</td>

			<td>
				<button
				onClick={() => {
                    setDataIdToBeUpdated(id);
                    setUpdatedPatientAge(data.age);
                    setUpdatedPatientName(data.name);
                    setUpdatedPatientGender(data.gender);
                    setUpdatedPatientBedNO(data.bedNO);
					//<PatientAddButton/>
				}}
				>
				Update
				</button>
			</td>
			<td>
				<button
				onClick={() => {
					deleteData(id);
				}}
				>
				Delete
				</button>
			</td>
			<td>
			<>
			<button onClick={() => 
				 {setButtonPopup(true)}
				 }> View Details </button>
				<Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
					<h2>Patient Vitals</h2>

					<td>{data.resp}</td>
					<td>{data.temp}</td>
					<td>{data.sys}</td>
					<td>{data.dia}</td>
					<td>{data.hr}</td>
					
					
				</Popup>
			</>
			</td>
			</tr>
		))}
		
		</table>
	</div>
	</div>
	</>
);
}



	
export default PatientManage;
