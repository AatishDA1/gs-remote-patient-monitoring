import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { AEDButton } from "../ManagingDrs/AEDButton";
import { allpatients } from "./ListPats";
import "../Styles/styles.css";
import { navigate } from "gatsby";
import AddPatient from "../../pages/AddPatient";
import db from "../../pages/firebase";

//reference from    https://stackoverflow.com/questions/70051729/how-to-disable-a-button-if-more-than-once-check-box-is-checked-in-react-js
//                  https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
//                  https://blog.logrocket.com/building-custom-checkbox-react/

export default function MPActions() {
    // firebase Patient Select part
    const [patData, setPatData] = useState([]);

    useEffect(() => {
        db.collection("patientsData").onSnapshot((snapshot) => {
        setPatData(
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
    
    // firebase update and delete?
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
        db.collection("patientsData").doc(id).delete();
    }
    
    
    // checkbox part


    const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

    const [checkedState, setCheckedState] = useState(
        new Array(patData.length).fill(false)
      );
    
    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.filter((value) => value === true).length;
        
        setTotal(totalPrice);
    };

    // const [checkedstate, setcheckedstate] = useState([]);
    // function handleOnChange(e) {
    //     const {parentNode: { children }} = e.target;
    //     const index = [...children].indexOf(e.target);
    //     const newState = [...checkedstate];
    //     newState[index] = !newState[index];
    //     setcheckedstate(newState);
    // }

    function editDisabled(){
        return total === 0 || total >1;
    }
    function deleteDisabled(){
        return total === 0
    }


    return(
        <div className="ChangeBtnState">
            <ul className="doctors-list">
                <div className="scroll">
                {patData.map(({id,data}) => {
                    return (
                        <li key={id}>
                            <span className="flex-container">
                                <li>
                                    <span className="checkbox-wrapper">
                                        <input
                                        type="checkbox"
                                        chekbxid={`custom-checkbox-{id}`}
                                        checked={checkedState[id]}
                                        onChange={()=>handleOnChange(id)}
                                        className={checkedState? "checked" : ""}
                                        />
                                    </span>
                                </li>
                                <span>{data.name}</span>
                                <div>{data.age}</div>
                                <div>{data.gender}</div>
                                <div>{data.bedNO}</div>
                                    <button className="aedbtnstyle"
                                    onClick={() => {
                                        setDataIdToBeUpdated(id);
                                        setUpdatedPatientAge(data.age);
                                        setUpdatedPatientName(data.name);
                                        setUpdatedPatientGender(data.gender);
                                        setUpdatedPatientBedNO(data.bedNO);
                                    }}>
                                    update
                                    </button>
                            </span>
                        </li>
                    );
                })}
                </div>
                <li>
                    <div>
                        <AEDBtn>
                            <AddPatient/>
                            <li>{getFormattedPrice(total)}</li>
                            {/* <button className="aedbtnstyle" disabled={editDisabled()} onClick={() => navigate("/EditPatient")}>
                                EDIT
                            </button>
                            <button className="aedbtnstyle" disabled={deleteDisabled2()} onClick={() => navigate("/DeletePatient")}>
                                DELETE
                            </button> */}
                        </AEDBtn>
                    </div>
                </li>
            </ul>
        </div>
    )
};

const AEDBtn = styled.div`
  margin: 5px;
  margin-right: 5px;

`;

// const Listbox = styled.nav`
//   background: #A9A9A9;
//   color: rgb(0,0,0);
//   font-weight: bold;
//   display: inline;
//   justify-content: space-between;
//   text-align:left;
//   position: relative;
//   padding-top: 1rem;
//   padding-bottom: 1rem;
//   padding-left: 3.2rem;
//   padding-right: 3.2rem;
//   width: 100px;
//   margin: 0 auto;
// `;