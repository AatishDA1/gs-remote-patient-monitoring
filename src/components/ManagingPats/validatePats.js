export default function validatePats(values) {
    let patErrors = {};
  
    if (!values.name.trim()) {
      patErrors.name = "Name required";
    }
  
    if (!values.gender) {
      patErrors.gender = "Gender required";
    } else if (!/F/.test(values.gender) || !/M/.text(values.gender)) {
      patErrors.gender = "Gender is invalid";
    }
  
    if (!values.age) {
      patErrors.age = "Age required";
    } else if (isNaN(values.age)) {
      patErrors.age = "age must be a number"
    }
  
    if (!values.bedNO) {
      patErrors.bedNO = "bed number required";
    } else if (isNaN(values.bedNO)) {
      patErrors.bedNO = "bed number must be a number";
    }

    return patErrors;
  }

  