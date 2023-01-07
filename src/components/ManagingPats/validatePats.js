export default function validatePats(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = "Username required";
    }
  
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password needs to be 8 characters or more";
    }
  
    return errors;
  }

  