import React, { useState } from "react";
import styled from "styled-components";
import { AEDButton } from "../ManagingDrs/AEDButton";
import { allpatients } from "./ListPats";
import "../ManagingDrs/styles.css";

// export default function ChangeBtnState() {
//     const [change, setChange] = useState(Array(3).fill(false));

//     function buttonHandler(index){
//         let status = [...change];
//         status[index] = !status[index]        
//         setChange(status)
//     }

//     return (
//         <div className="ChangeBtnState">

//         <AEDButton disabled={change.filter(status => status === true).length !== 1} primary round>Delete</AEDButton>
//         {Array(3).fill(0).map((_, index) => <input type="checkbox" checked={change[index]} onChange={() => buttonHandler(index)}/>)}

//         </div>
//     )
// }

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
                            <AEDButton disabled={total!==0} primary round to="/AddDoctor">
                                Add
                            </AEDButton>
                            <AEDButton disabled={total!==1} primary round to="/EditDoctor">
                                Edit
                            </AEDButton>
                            <AEDButton disabled={total===0} primary round to="/DeleteDoctor">
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

const Listbox = styled.nav`
  background: #A9A9A9;
  color: rgb(0,0,0);
  font-weight: bold;
  display: inline;
  justify-content: space-between;
  text-align:left;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  width: 100px;
  margin: 0 auto;
`;