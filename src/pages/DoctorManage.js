import React, { useState, useEffect } from "react";
import "../components/Styles/firebasestyle.css";
import db from "./firebase";
import "../components/Styles/styles.css";
import { navigate } from "gatsby";

function DoctorManage(){
    const [DoctorsData, setDoctorsData] = useState([]);
	const [updatedDoctorName, setUpdatedDoctorName] = useState("");
	const [updatedDoctorOffice, setUpdatedDoctorOffice] = useState("");
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


	const updateData = (e) => {
		e.preventDefault();
		db.collection("DoctorsData").doc(dataIdToBeUpdated).update({
		name: updatedDoctorName,
		office: updatedDoctorOffice,
	
		});
	
		setUpdatedDoctorOffice("");
		setUpdatedDoctorName("");

		setDataIdToBeUpdated("");
	};


	const deleteData = (id) => {
        db.collection("DoctorsData").doc(id).delete(); }


	return (<>
	<div className="App">
	{!dataIdToBeUpdated ? (
		<button className="aedbtnstyle" onClick={() => navigate("/AddDoctor")}>Add</button>
		) : (
		<div className="App__Updateform">
		<input
			type="text"
			placeholder="Name"
			value={updatedDoctorName}
			onChange={(e) => setUpdatedDoctorName(e.target.value)}
		/>
		<input
			type="text"
			placeholder="Office"
			value={updatedDoctorOffice}
			onChange={(e) => setUpdatedDoctorOffice(e.target.value)}
		/>
		<button onClick={updateData}>Update</button>
		</div>
		)} 


	  <div className="App__DataDisplay">
		<table>
		<tr>
			<th>NAME</th>
			<th>OFFICE</th>
			<th>Update</th>
			<th>Delete</th>
			<th>Select</th>
			</tr>

			{DoctorsData?.map(({ id, data }) => (
			<tr key={id}>
			<td>{data.name}</td>
			<td>{data.office}</td>


			<td>
				<button
				onClick={() => {
                    setDataIdToBeUpdated(id);
                    setUpdatedDoctorOffice(data.office);
                    setUpdatedDoctorName(data.name);
					// <button className="aedbtnstyle" onClick={() => navigate("/AddDoctor")}>Add</button>
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
			</tr>
		))}
		
		</table>
	</div>
	</div>
	</>
);
}

export default DoctorManage;
