// import React, { useState, useEffect } from "react";
// import db from "../General/firebase";
// import { respR, tempR, sysR, diasR, heartR } from "./SimDataNorm";

// export default function SimDB() {
//     // retrieve data from data base
//     const [patientsData, setPatientsData] = useState([]);
//     // const [newRespRate, setnewRespRate] = useState([]);
//     const [patientName, setPatientName] = useState("");
//     const [patientAge, setPatientAge] = useState("");
//     const [patientGender, setPatientGender] = useState("");
//     const [patientBedNO, setPatientBedNO] = useState("");
// 	const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
//   // creating new places to store vitals
// 	const [time, setTime] = useState([]);
// 	const [respRate, setRespRate] = useState([]);
// 	const [sysRate, setSysPressure] = useState([]);
// 	const [diaRate, setDiaPressure] = useState([]);
// 	const [HRate, setHR] = useState([]);
// 	const [tempRate, setTemp] = useState([]);
//     const updateDB = () => {
//         db.collection("patientsData").add({
//             name: patientName,
//             age: patientAge,
//             gender: patientGender,
//             bedNO: patientBedNO,

//             time: Date.now(),
//             resp: respRate,
//             temp: tempRate,
//             sys: sysRate,
//             dia: diaRate,
//             hr: HRate,
//             });
      
//             setPatientName("");
//             setPatientAge("");
//             setPatientGender("");
//             setPatientBedNO("");
      
//             setTime(Date.now());
//             setRespRate(respR);
//             setTemp(tempR);
//             setSysPressure(sysR);
//             setDiaPressure(diasR);
//             setHR(heartR);
//     }
//     useEffect(()=>{
//         db.collection("patientsData").onSnapshot((snapshot) => {
//             setPatientsData(
//                 snapshot.docs.map((doc) => ({ 
//                   id: doc.id,
//                   data: doc.data(),
//                 }))
//               );
//             })
//             console.log({resp: respRate})
//         })
    
    
//     // update data into data base
// }