import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters

const phoneNumberRules = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//Must contain 10 numbers

export const registerSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    phoneNumber: yup
    .string()
    .matches(phoneNumberRules, "Please enter valid Phone number")
    .required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup
        .string()
        .min(8)
        .matches(passwordRules, "Please create a strong password")
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Please must match")
        .required("Required"),
});
