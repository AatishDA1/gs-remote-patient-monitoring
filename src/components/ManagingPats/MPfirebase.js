import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import "../Styles/styles.css";

function PatientSelect(){

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


	const [readData, setreadData] = useState("");
	const [getName, setGetName] = useState("");
	const [getResp, setGetResp] = useState("");
	const [getHR, setGetHR] = useState("");
	const [getSys, setGetSys] = useState("");
	const [getDia, setGetDia] = useState("");
	const [getTemp, setGetTemp] = useState("");

	const getData = (e) => {
		e.preventDefault();
		const please = db.collection("patientsData").doc(readData)

		const doc = please.get({
			name : getName,
			resp: getResp,
			temp: getTemp,
			sys: getSys,
			dia: getDia,
			hr: getHR
		});



		if (!doc.exists) {
			<>'No such document!'</>;
		  } else {

			setGetName(doc.name);
			setGetResp(doc.resp);
			setGetTemp(doc.temp);
			setGetSys(doc.sys);
			setGetDia(doc.dia);
			setGetHR(doc.hr);
			setreadData("");
		  }
		  
	

	};


return(<>
	
	<div className="App">
	{!readData ? (
		
		<div className="App__buttons">
		<button className="aedbtnstyle" disabled={total!==0} onClick={() => navigate("/AddPatient")}>Add</button>
		</div>
		) : (
			/*PLOT GRAPHS UNDER HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
		<div className="App__Updateform">
				<h2>Patient Vitals</h2>
				<button onClick={getData}>fetch</button> 
				Name : {getName}
				Resp : {getResp}
				Temp : {getTemp}
				Sys : {getSys}
				Dia : {getDia}
				HR : {getHR}
				</div>
		)}


	  <div className="App__DataDisplay">
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
				<>
				<button onClick={() => {setreadData(id);
					setGetName(data.name);
					setGetResp(data.resp);
					setGetTemp(data.temp);
					setGetSys(data.sys);
					setGetDia(data.dia);
					setGetHR(data.hr);
     				}}> View Details </button>
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



	
export default PatientSelect;