import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";

import Popup from '../components/General/popupPTV'

import PatientAddButton from  "../components/HomePages/PatientAddButton";

function PatientSelect(){
	const [buttonPopup, setButtonPopup] = useState(false);
    const [patientsData, setPatientsData] = useState([]);

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

return(<>

	  <div className="App__DataDisplay">
	  <div className="App__buttons">
		<PatientAddButton/>
		</div>
		<table>
			<tr>
			<th>NAME</th>
			<th>AGE</th>
			<th>GENDER</th>
			<th>BED NUMBER</th>
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
			
			</td>
			</tr>
		))}
		
		</table>
	</div>
	</>
);
}



	
export default PatientSelect;
