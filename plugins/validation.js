export default async (ctx, inject) => {
  const validatePhoneNumber = async (number) => {
    const phonePattern = /^\d{10}$/;
    if (number && !phonePattern.test(number)) {
      return false;
    }
    return true;
  };

  const validateNumber = async (value) => {
    let number = value.replace(/\D/g, "");

    if (number.length > 10) {
      number = number.slice(0, 10);
    }
    return number;
  };
  const validateAddressDetail = async (value) => {
    let number = value.replace(/\D/g, "");
    return number;
  };

  const validateRegisterFormData = async ({ form }) => {
    const errors = {};
    const isEmpty = (value) => {
      return typeof value === "string" ? value.trim() === "" : !value;
    };
    const setError = (fieldName, message) => {
      errors[fieldName] = message;
    };

    const validateField = (field, fieldName, errorLabel) => {
      if (isEmpty(field)) {
        setError(fieldName, `${errorLabel} is required`);
      }
    };

    validateField(form.firstName, "firstName", "first-name");
    validateField(form.lastName, "lastName", "last-name");
    validateField(form.phoneNumber, "phoneNumber", "phone-number");
    validateField(form.email, "email", "email");
    validateField(form.password, "password", "password");
    validateField(form.confirmPassword, "confirmPassword", "confirm-password");
    validateField(form.company, "company", "business");

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("email", "Invalid email format");
    }
    if (!(await validatePhoneNumber(form.phoneNumber))) {
      setError("phoneNumber", "Invalid phone-number format");
    }
    if (form.password !== form.confirmPassword) {
      setError("confirmPassword", "Passwords do not match.");
    }
    if (!form.terms) {
      setError("terms", "Please accept terms and conditions to proceed.");
    }

    return errors;
  };
  const validateLoginFormData = async ({ form }) => {
    const errors = {};
    const isEmpty = (value) => {
      return typeof value === "string" ? value.trim() === "" : !value;
    };
    const setError = (fieldName, message) => {
      errors[fieldName] = message;
    };

    const validateField = (field, fieldName, errorLabel) => {
      if (isEmpty(field)) {
        setError(fieldName, `${errorLabel} is required`);
      }
    };

    validateField(form.email, "email", "email");
    validateField(form.password, "password", "password");

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("email", "Invalid email format");
    }

    return errors;
  };

  inject("validateRegisterFormData", validateRegisterFormData);
  inject("validateLoginFormData", validateLoginFormData);
  inject("validateNumber", validateNumber);
  inject("validateAddressDetail", validateAddressDetail);
};
