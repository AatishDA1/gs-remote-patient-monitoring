import React, { useState } from "react";
import styled from "styled-components";
import { AEDButton } from "./AEDButton";
import { alldoctors } from "./ListDrs";
import "./styles.css";

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

export default function ChangeBtnState() {
    const [checkedstate, setcheckedstate] = useState(
        new Array(alldoctors.length).fill(false)
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
                    return sum+alldoctors[index].office;
                }
                return sum;
            },
            0
        );
        setTotal(totalPrice);
    };

    return(
        <div className="ChangeBtnState">
            {/* <h3>Select Doctors</h3> */}
            <ul className="doctors-list">
                {alldoctors.map(({name, office},index) => {
                    return (
                        <li key={index}>
                            <div className="doctors-list-item">
                                <div className="left-section">
                                    <div className="checkbox-wrapper">
                                        <input
                                        type="checkbox"
                                        id={'custom-checkbox-{index}'}
                                        name={name}
                                        value={name}
                                        checked={checkedstate[index]}
                                        onChange={()=> handleOnChange(index)}
                                        className={checkedstate? "checked" : ""}
                                        />
                                        <label htmlFor={'custom-checkbox-{index}'}>{name}</label>
                                    </div>
                                </div>
                                <div className="right-section">{office}</div>
                            </div>
                        </li>
                    );
                })}
                <li>
                    {/* <div className="doctors-list-item">
                        <div className="left-section">Total:</div>
                        <div className="right-section">{total}</div>
                    </div> */}
                    <div>
                        <AEDBtn>
                            <AEDButton disabled={total!=0} primary round to="/AddDoctor">
                                Add
                            </AEDButton>
                            <AEDButton disabled={total!=102} primary round to="/EditDoctor">
                                Edit
                            </AEDButton>
                            <AEDButton disabled={total==0} primary round to="/DeleteDoctor">
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
  font-size: clamp(0.5rem, 2.0vw, 2.5rem);
`;
