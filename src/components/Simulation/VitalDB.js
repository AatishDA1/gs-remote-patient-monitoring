// import React, { useState, useEffect } from "react";
// import db from "../General/firebase";
// import styled from "styled-components";
// import "../Styles/styles.css";

// export default function VitalDB(){
//     const [patientVital,setPatientVital] = useState ([]);
//     useEffect(() => {
//         db.collection("patientsVital").onSnapshot((snapshot) => {
//             setPatientsVital(
//               snapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 data: doc.data(),
//               }))
//             );
//           });
// }, []);}
