import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/loginSchema";
import { handleLogin } from "../../controller/handleLogin";
import { handleGoogleLogin } from "../../controller/handleGooogleLogin";

const Login = () => {
  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    handleLogin(value.email, value.password);
  };

  const { values, handleBlur, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <div className="w-[350px] h-[550px] p-[10px] my-[20px]">
      <div className="w-full h-[50px] bg-[#E2ECFC] text-[#5B6271] flex justify-start items-center px-[10px]">
        <h1 className="text-[23px] font-semibold">Login</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        action="POST"
        className="w-full h-[calc(100%-50px)] text-[15px] flex flex-col items-center border-b-[4px] border-solid border-[#E2ECFC] p-[10px] pt-[70px]"
      >
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

        <h2 className="text-[#8d91a5] mt-[35px]">Already have an account?</h2>
        <button
          className="w-[70%] h-[40px] font-semibold rounded-[5px] border-[2px] border-[#01579B] text-[#8d91a5] hover:text-[#fff] hover:bg-[#01579B] mt-[35px]"
          type="submit"
        >
          <h1>Login</h1>
        </button>
        <button
          className="w-[70%] h-[40px] font-semibold rounded-[5px] border-[2px] border-[#01579B] text-[#8d91a5] hover:text-[#fff] hover:bg-[#01579B] mt-[20px]"
          type="submit"
          onClick={handleGoogleLogin}
        >
          <h1>SignUp With Google</h1>
        </button>
      </form>
    </div>
  );
};

export default Login;
