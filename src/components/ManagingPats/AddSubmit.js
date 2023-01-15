import React, { useState } from "react";
import AddPatPopUp from "./AddPatPopUp";
import "../Styles/styles.css";
import "../Styles/Popup.css";

/* Reference 9 - taken from https://github.com/briancodex/react-form-v1/blob/master/src/Form.js */

export default function AddSubmit(props) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  /* End of Reference 9 */
  return props.trigger ? (
    <>
        {!isSubmitted ? (
          <AddPatPopUp submitForm={submitForm} />
        ) : (
            props.setTrigger(false)
        )}
    </>
  ) : (
    ""
  );
};
