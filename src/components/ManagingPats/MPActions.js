import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../Styles/styles.css";
import { navigate } from "gatsby";
import db from "../../pages/firebase";
import MPHeader from "./MPheading";
import APats from "./APats";
import { BsSearch } from "react-icons/Bs";

//reference from    https://stackoverflow.com/questions/70051729/how-to-disable-a-button-if-more-than-once-check-box-is-checked-in-react-js
//                  https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
//                  https://blog.logrocket.com/building-custom-checkbox-react/

export default function MPActions() {
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
    var patdata = patientsData.length
    const [checkedState, setCheckedState] = useState( Array(patdata).fill(false))
    
    useEffect(() => {
        setCheckedState(new Array(patientsData.length).fill(false))
    },[patientsData]);
    
    const [total, setTotal] = useState(0);

    const [patID, setpatID] = useState([])

    const handleOnChange = (position) => {
        setpatID(position);
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
            <button className="aedbtnstyle" onClick={updateData}>UPDATE</button>
            </div>
		)}
        <div className="ChangeBtnState">
            <ul className="doctors-list">
                <form className="search">
                    <input
                        type="text"
                        placeholder="search patient name..."
                        className="search__input"
                        onChange={(e) => setQuery(e.target.value)}        
                    />
                    <button className='search__button'><BsSearch/></button>
                </form>
                <MPHeader/>
                <div className="scroll">
                {patientsData.filter(user=>
                user.data.name.toLowerCase().includes(query)
                ).map(({id,data}, index) => {
                    return (
                        <li key={index}>
                            <span className="flex-container">
                                <div>
                                    <span className="checkbox-wrapper">
                                        <input
                                        type="checkbox"
                                        cbid={`custom-checkbox-${index}`}
                                        checked={checkedState[index]}
                                        onChange={()=>handleOnChange(index)}
                                        className={checkedState? "checked" : ""}
                                        />
                                    </span>
                                </div>
                                <span>{data.name}</span>
                                <p>{data.age}</p>
                                <p>{data.gender}</p>
                                <p>{data.bedNO}</p>
                            </span>
                        </li>
                    );
                })}
                </div>
                <li>
                    <div>
                        <AEDBtn>
                            <button className="aedbtnstyle"
                                disabled={editDisabled()}
                                onClick={() => {
                                    setDataIdToBeUpdated(patientsData[patID].id);
                                    setUpdatedPatientAge(patientsData[patID].data.age);
                                    setUpdatedPatientName(patientsData[patID].data.name);
                                    setUpdatedPatientGender(patientsData[patID].data.gender);
                                    setUpdatedPatientBedNO(patientsData[patID].data.bedNO);
                                }}>
                                EDIT
                            </button>
                            <button className="aedbtnstyle" disabled={deleteDisabled()} onClick={() => navigate("/DeletePatient")}>
                                DELETE
                            </button>
                            <APats/>
                        </AEDBtn>
                    </div>
                </li>
            </ul>
        </div>
    </>
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