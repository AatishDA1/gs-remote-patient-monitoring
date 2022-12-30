import React, { useState } from "react";
import { allpatients } from "./ListPats";
import "../ManagingDrs/styles.css";


const MPcheckbox = ({label, checked, ...props}) =>{

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

    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    return (
        <div className="checkbox-wrapper">
            <label>
                <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                className={isChecked ? "checked" : ""}
                {...props}
                />
                <span>{label}</span>
            </label>
            <p>{isChecked ? "Selected" : "Unchecked"}</p>
        </div>
    );
};
export default MPcheckbox;