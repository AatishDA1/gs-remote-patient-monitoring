import React, { useState, useEffect } from "react";
import db from "../../pages/firebase";
// import "../Styles/firebasestyle.css";
import "../Styles/styles.css";
import "../Styles/Popup.css"


function MPpopup(props){
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
    return(props.trigger) ? (
        <div className="popup">
		<div className="popup-addpersonnel">
        <div className="App">
	    {!dataIdToBeUpdated ? (
            <div>
            </div>
            ) : (
            <div>
                <button className="aedbtnstyle" onClick={() => props.setTrigger(false)}>BACK</button>
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
                </div>
                <button onClick={updateData}>UPDATE</button>
                <button className="aedbtnstyle" onClick={() => props.setTrigger(false)}>CANCEL</button>
            </div>
        )}
        </div>
        </div>
        </div>
    ) : "";
}
            

export default MPpopup;