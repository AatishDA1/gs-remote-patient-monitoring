export default function validatePats(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = "Name required";
    }
  
    if (!values.gender) {
      errors.gender = "Gender required";
    } else if (!/F/.test(values.gender) || !/M/.text(values.gender)) {
      errors.gender = "Gender is invalid";
    }
  
    if (!values.age) {
      errors.age = "Age required";
    } else if (typeof values.age === 'string' || values.age instanceof String) {
      errors.age = "age must be a number"
    }
  
    if (!values.bedNO) {
      errors.bedNO = "Gender required";
    } else if (!/F/.test(values.bedNO) || !/M/.text(values.bedNO)) {
      errors.bedNO = "Gender is invalid";
    }

    return errors;
  }

  