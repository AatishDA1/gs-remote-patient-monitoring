import React, { useState, useEffect } from "react";
import db from "../../pages/firebase";
import "../Styles/styles.css"
import "../Styles/Popup.css"

function ADpopup(props){
    const [doctorName, setDoctorName] = useState("");
    const [doctorOffice, setDoctorOffice] = useState("");
    const [patientList, setPatientList] = useState([]);
	const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

	const submit = (e) => {
        e.preventDefault();
        db.collection("DoctorsData").add({
        name: doctorName,
        office: doctorOffice,
        patientList: patientList,
        });
        setDoctorName("");
        setDoctorOffice("");
        setPatientList([]);
    };

	
	return(props.trigger) ? (
		<div className="popup">
		<div className="popup-addpersonnel">
		<div className="App">
		{!dataIdToBeUpdated && (
			<div>
				<button className="aedbtnstyle" onClick={() => props.setTrigger(false)}>BACK</button>
				<div className="App__form">
				<input
					type="text"
					placeholder="Name"
					value={doctorName}
					onChange={(e) => setDoctorName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Office #"
					value={doctorOffice}
					onChange={(e) => setDoctorOffice(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Pat. List"
					value={patientList}
					onChange={(e) => setPatientList(e.target.value)}
				/>
				</div>
				<button className="aedbtnstyle" onClick={submit}>Submit</button>
				<button className="aedbtnstyle" onClick={() => props.setTrigger(false)}>CANCEL</button>
			</div>
		)}
		</div>
		</div>
		</div>
	) : "";
}

export default ADpopup;