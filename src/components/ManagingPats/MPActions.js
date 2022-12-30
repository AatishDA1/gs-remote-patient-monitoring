import React, { useState } from "react";
import styled from "styled-components";
import { AEDButton } from "../ManagingDrs/AEDButton";
import { allpatients } from "./ListPats";
import "../ManagingDrs/styles.css";

//reference from    https://stackoverflow.com/questions/70051729/how-to-disable-a-button-if-more-than-once-check-box-is-checked-in-react-js
//                  https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
//                  https://blog.logrocket.com/building-custom-checkbox-react/

export default function MPActions() {
    const [checkedstate, setcheckedstate] = useState(
        new Array(allpatients.length).fill(false)
    );

    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState =checkedstate.map((item, index) =>
            index === position ? !item:item
        );

        setcheckedstate(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum,  currentState, index) => {
                if(currentState === true) {
                    return sum+1;
                }
                return sum;
            },
            0
        );
        setTotal(totalPrice);
    };

    return(
        <div className="ChangeBtnState">
            <ul className="doctors-list">
                {allpatients.map(({name, room, supo},index) => {
                    return (
                        <li key={index}>
                            <span className="flex-container">
                                <div className="left-section">
                                    <span className="checkbox-wrapper">
                                        <input
                                        type="checkbox"
                                        id={'custom-checkbox-{index}'}
                                        name={name}
                                        value={name}
                                        checked={checkedstate[index]}
                                        onChange={()=> handleOnChange(index)}
                                        className={checkedstate? "checked" : ""}
                                        />
                                    </span>
                                </div>
                                <span className="left-section">{name}</span>
                                <span className="center-section">{room}</span>
                                <span className="alignright">{supo}</span>
                            </span>
                        </li>
                    );
                })}
                <li>
                    <div>
                        <AEDBtn>
                            <AEDButton disabled={total!==0} primary round to="/AddPatient">
                                Add
                            </AEDButton>
                            <AEDButton disabled={total!==1} primary round to="/EditPatient">
                                Edit
                            </AEDButton>
                            <AEDButton disabled={total===0} primary round to="/DeletePatient">
                                Delete
                            </AEDButton>
                        </AEDBtn>
                    </div>
                </li>
            </ul>
        </div>
    )
}

const AEDBtn = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 5px;
  font-weight: bold;
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