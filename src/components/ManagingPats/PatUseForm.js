import { useState, useEffect } from "react";

const PatUseForm = (validate) => {
  const [values, setValues] = useState({
    name: "",
    gender: "",
    age: "",
    bedNO: "",
  });
  const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    // setIsSubmitting(true);
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     callback();
  //   }
  // }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default PatUseForm;
