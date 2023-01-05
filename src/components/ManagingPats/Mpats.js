// import "../Styles/styles.css";
// import db from "../../pages/firebase";
// import MPpopup from "./MPatPopup";
// import React, { useState, useEffect } from "react";

// //for testing nav button

// function ManPatient(){
//     const [buttonPopup, setButtonPopup] = useState(false);

//     const [patientsData, setPatientsData] = useState([]);
// 	const [updatedPatientName, setUpdatedPatientName] = useState("");
// 	const [updatedPatientAge, setUpdatedPatientAge] = useState("");
// 	const [updatedPatientGender, setUpdatedPatientGender] = useState("");
// 	const [updatedPatientBedNO, setUpdatedPatientBedNO] = useState("");
// 	const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");


//     useEffect(() => {
//         db.collection("patientsData").onSnapshot((snapshot) => {
//         setPatientsData(
//             snapshot.docs.map((doc) => ({
//             id: doc.id,
//             data: doc.data(),
//             }))
//         );
//         });
//         }, 
//     []);

// 	const updateData = (e) => {
// 		e.preventDefault();
// 		db.collection("patientsData").doc(dataIdToBeUpdated).update({
// 		name: updatedPatientName,
// 		age: updatedPatientAge,
// 		gender: updatedPatientGender,
// 		bedNO: updatedPatientBedNO
// 		});
	
// 		setUpdatedPatientAge("");
// 		setUpdatedPatientName("");
// 		setUpdatedPatientGender("");
// 		setUpdatedPatientBedNO("");
// 		setDataIdToBeUpdated("");
//     }

//     return(
//     <>
//         <button className="aedbtnstyle" onClick={() => {
//             setButtonPopup(true)
//             setDataIdToBeUpdated(id);
//             setUpdatedPatientAge(data.age);
//             setUpdatedPatientName(data.name);
//             setUpdatedPatientGender(data.gender);
//             setUpdatedPatientBedNO(data.bedNO);
//         }
//         }>EDIT</button>
//         <MPpopup trigger={buttonPopup} setTrigger = {setButtonPopup}></MPpopup>
//     </>
//     )
// }

// export default ManPatient;