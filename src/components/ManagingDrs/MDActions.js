import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../Styles/styles.css";
import { navigate } from "gatsby";
import db from "../../pages/firebase";
import MDHeader from "./MDheading";
import ADocs from "./ADocs";
import { BsSearch } from "react-icons/Bs";

//reference from    https://stackoverflow.com/questions/70051729/how-to-disable-a-button-if-more-than-once-check-box-is-checked-in-react-js
//                  https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
//                  https://blog.logrocket.com/building-custom-checkbox-react/

export default function MPActions() {
    // const [buttonPopup, setButtonPopup] = useState(false);
    const [doctorsData, setDoctorsData] = useState([]);
	const [updatedDoctorName, setUpdatedDoctorName] = useState("");
	const [updatedDoctorOffice, setUpdatedDoctorOffice] = useState("");
	const [updatedPatientList, setUpdatedPatientList] = useState([]);
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
		patientlist: updatedPatientList,
		});
	
		setUpdatedDoctorName("");
		setUpdatedDoctorOffice("");
		setUpdatedPatientList("");
		setDataIdToBeUpdated("");
	};

	const deleteData = (id) => {
        db.collection("DoctorsData").doc(id).delete();
    }

    //checkbox part
    var docdata = doctorsData.length
    const [checkedState, setCheckedState] = useState( Array(docdata).fill(false))
    
    useEffect(() => {
        setCheckedState(new Array(doctorsData.length).fill(false))
    },[doctorsData]);
    
    const [total, setTotal] = useState(0);

    const [docID, setDocID] = useState([])

    const handleOnChange = (position) => {
        setDocID(position);
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.filter((value) => value === true).length;

        setTotal(totalPrice);
    };
    
    // const [checkedstate, setcheckedstate] = useState(
    //     new Array(alldoctors.length).fill(false)
    // );

    // const [total, setTotal] = useState(0);

    // const handleOnChange = (position) => {
    //     const updatedCheckedState =checkedstate.map((item, index) =>
    //         index === position ? !item:item
    //     );

    //     setcheckedstate(updatedCheckedState);

    //     const totalPrice = updatedCheckedState.reduce(
    //         (sum,  currentState, index) => {
    //             if(currentState === true) {
    //                 return sum+1;
    //             }
    //             return sum;
    //         },
    //         0
    //     );
    //     setTotal(totalPrice);
    // };

    function editDisabled(){
        return total === 0 || total >1;
    }
    function deleteDisabled(){
        return total === 0
    }

    
    //search
    const [query, setQuery] = useState("");

    return(
        <>
        {!dataIdToBeUpdated ? (
            <div className="App__buttons">
            {/* <button className="aedbtnstyle" onClick={() => navigate("/AddPatient")}>Add</button> */}
            </div>
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
                placeholder="Office #"
                value={updatedDoctorOffice}
                onChange={(e) => setUpdatedDoctorOffice(e.target.value)}
            />
            <input
                type="text"
                placeholder="Patient List"
                value={updatedPatientList}
                onChange={(e) => setUpdatedPatientList(e.target.value)}
            />
            <button className="aedbtnstyle" onClick={updateData}>UPDATE</button>
            </div>
		)}
        <div className="ChangeBtnState">
            <ul className="doctors-list">
                <form className="search">
                    <input
                        type="text"
                        placeholder="search doctor name..."
                        className="search__input"
                        onChange={(e) => setQuery(e.target.value)}        
                    />
                    <button className='search__button'><BsSearch/></button>
                </form>
                <MDHeader/>
                <div className="scroll">
                {doctorsData.filter(user=>
                user.data.name.toLowerCase().includes(query)
                ).map(({id, data},index) => {
                    return (
                        <li key={index}>
                            <span className="flex-containerdr">
                                <div>
                                    <span className="checkbox-wrapper">
                                        <input
                                        type="checkbox"
                                        id={'custom-checkbox-{index}'}
                                        checked={checkedState[index]}
                                        onChange={()=> handleOnChange(index)}
                                        className={checkedState? "checked" : ""}
                                        />
                                    </span>
                                </div>
                                <span>{data.name}</span>
                                <p>{data.office}</p>
                                <p>view (patlist)</p>
                            </span>
                        </li>
                    );
                })}
                </div>
                <li>
                    <div>
                        <AEDBtn>
                            <ADocs/>
                            <button className="aedbtnstyle"
                                disabled={editDisabled()}
                                onClick={() => {
                                    setDataIdToBeUpdated(doctorsData[docID].id);
                                    setUpdatedDoctorName(doctorsData[docID].data.name);
                                    setUpdatedDoctorOffice(doctorsData[docID].data.office);
                                    setUpdatedPatientList(doctorsData[docID].data.patientlist);
                                }}>
                                EDIT
                            </button>
                            <button className="aedbtnstyle" disabled={deleteDisabled()} onClick={() => navigate("/DeletePatient")}>
                                DELETE
                            </button>
                        </AEDBtn>
                    </div>
                </li>
            </ul>
        </div>
    </>
    )
};

const AEDBtn = styled.div`
  margin:5px;
  margin-right: 5px;
`;