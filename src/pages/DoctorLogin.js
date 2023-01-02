import React, { useState } from "react";
import "../components/Styles/Login.css";
import FormSignup from "../components/Login/FormSignup";
import { navigate } from "gatsby";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import HPHeader from "../components/HomePages/HPHeader";
import LoginFooter from "../components/Login/LoginFooter";

/* Reference 9 - taken from https://github.com/briancodex/react-form-v1/blob/master/src/Form.js */

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  /* End of Reference 9 */
  return (
    <>
      <GlobalStyle />
      <HPHeader />
      <h2>Doctor Login Page</h2>
      <div className="form-container">
        <div className="form-content-left"></div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          navigate("/DoctorHome")
        )}
      </div>
      <LoginFooter />
    </>
  );
};

export default Form;
