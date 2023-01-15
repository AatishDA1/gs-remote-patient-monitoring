export default function validateDocs(values) {
    let drErrors = {};
  
    if (!values.name.trim()) {
      drErrors.name = "Name required";
    }
  
    if (!values.office) {
      drErrors.office = "Age required";
    } else if (isNaN(values.office)) {
      drErrors.office = "age must be a number"
    }

    return drErrors;
  }

  