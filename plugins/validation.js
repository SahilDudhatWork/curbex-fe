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

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return "Password must be at least 8 characters long";
    }
    if (!hasUpperCase) {
      return "Password must contain at least one uppercase letter";
    }
    if (!hasLowerCase) {
      return "Password must contain at least one lowercase letter";
    }
    if (!hasNumbers) {
      return "Password must contain at least one number";
    }
    if (!hasSpecialChar) {
      return "Password must contain at least one special character";
    }
    return null;
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
    // Add password strength validation
    if (form.password) {
      const passwordError = validatePassword(form.password);
      if (passwordError) {
        setError("password", passwordError);
      }
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
  const validateAddressFormData = async ({ form }) => {
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

    validateField(form.street, "street", "street");
    validateField(form.province, "province", "province");
    validateField(form.postal, "postal", "postal");
    validateField(form.city, "city", "city");

    return errors;
  };
  const validatePaymentFormData = async ({ form }) => {
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

    validateField(form.nameOnCard, "nameOnCard", "card-holder-name");
    validateField(form.card, "card", "card-number");
    validateField(form.expiry, "expiry", "expiration-date");
    validateField(form.cvv, "cvv", "cvv");

    return errors;
  };
  const formatExpiryDate = async (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length >= 2) {
      value = value.slice(0, 2) + " / " + value.slice(2);
    }
    return value;
  };
  const formatCardNumber = async (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    let formattedValue = "";

    // Add space after every 4 digits
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " ";
      }
      formattedValue += value[i];
    }

    return formattedValue;
  };
  const formatCVV = async (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    return value;
  };

  const passwordValidation = async ({ form }) => {
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
    if ("oldPassword" in form) {
      validateField(form.oldPassword, "oldPassword", "current-password");
    }

    validateField(form.password, "password", "new-password");
    validateField(form.confirmPassword, "confirmPassword", "confirm-password");

    // Add password strength validation
    if (form.password) {
      const passwordError = validatePassword(form.password);
      if (passwordError) {
        setError("password", passwordError);
      }
    }
    if (form.password !== form.confirmPassword) {
      setError("confirmPassword", "Passwords do not match.");
    }

    return errors;
  };

  inject("validateRegisterFormData", validateRegisterFormData);
  inject("validateLoginFormData", validateLoginFormData);
  inject("validateNumber", validateNumber);
  inject("validateAddressDetail", validateAddressDetail);
  inject("validateAddressFormData", validateAddressFormData);
  inject("formatExpiryDate", formatExpiryDate);
  inject("formatCardNumber", formatCardNumber);
  inject("formatCVV", formatCVV);
  inject("validatePaymentFormData", validatePaymentFormData);
  inject("passwordValidation", passwordValidation);
};
