import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas/registerSchema";
import { handleRegister } from "../../controller/handleRegister";

const Register = () => {
  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    handleRegister(
      value.firstName,
      value.lastName,
      value.phoneNumber,
      value.email,
      value.password
    );
  };

  const { values, handleBlur, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });
  return (
    <div className="w-[350px] p-[10px] my-[20px]">
      <div className="w-full h-[50px] bg-[#E2ECFC] text-[#5B6271] flex justify-start items-center px-[10px]">
        <h1 className="text-[23px] font-semibold">Register</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        action="POST"
        className="w-full h-[calc(100%-50px)] text-[15px] flex flex-col items-center border-b-[4px] border-solid border-[#E2ECFC] p-[10px]"
      >
        <input
          id="firstName"
          className={`
                     w-full h-[30px] rounded-[5px] p-[18px] my-[10px]
                    ${
                      errors.firstName && touched.firstName ? "input-error" : ""
                    }
                  `}
          type="text"
          placeholder="Firstname"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.firstName && touched.firstName && (
          <p className="error">{errors.firstName}</p>
        )}

        <input
          id="lastName"
          className={`
                w-full h-[30px] rounded-[5px] p-[18px] my-[10px]
                ${errors.lastName && touched.lastName ? "input-error" : ""}
              `}
          type="text"
          placeholder="Lastname"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.lastName && touched.lastName && (
          <p className="error">{errors.lastName}</p>
        )}

        <input
          id="phoneNumber"
          className={`
                  w-full h-[30px] rounded-[5px] p-[18px] my-[10px]
                  ${
                    errors.phoneNumber && touched.phoneNumber
                      ? "input-error"
                      : ""
                  }
                `}
          type="text"
          placeholder="Phone number"
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <p className="error">{errors.phoneNumber}</p>
        )}

        <input
          id="email"
          className={`
                  w-full h-[30px] rounded-[5px] p-[18px] my-[10px]
                  ${errors.email && touched.email ? "input-error" : ""}
                `}
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <input
          id="password"
          className={`
                  w-full h-[30px] rounded-[5px] p-[18px] my-[10px]
                  ${errors.password && touched.password ? "input-error" : ""}
                `}
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}

        <input
          id="confirmPassword"
          className={`
                w-full h-[30px] rounded-[5px] p-[18px] my-[10px]
                ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "input-error"
                    : ""
                }
              `}
          type="password"
          placeholder="Confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <h2 className="text-[#8d91a5] mt-[10px]">Already have an account?</h2>

        <button
          className="w-[70%] h-[40px] font-semibold rounded-[5px] border-[2px] border-[#01579B] text-[#8d91a5] hover:text-[#fff] hover:bg-[#01579B] my-[10px]"
          type="submit"
        >
          <h1>Sign Up</h1>
        </button>
      </form>
    </div>
  );
};

export default Register;
