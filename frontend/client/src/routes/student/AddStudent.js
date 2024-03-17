import { React, useState, useRef } from "react";
import { useFormik } from "formik";
import { studentAddSchema } from "../../schemas/addStudentSchema";
import { handleAddStudent } from "../../controller/handleAddStudent";

const AddStudent = () => {
  const [image, setImage] = useState("Images/blanckImage.png");
  const inputImage = useRef(null);

  const [status, setStatus] = useState();

  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    inputImage.current.value = ""; //Clear image input field

    handleAddStudent(
      value.studentId,
      value.studentName,
      image,
      value.age,
      status
    );
  };

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
    setFieldValue("imagePath", e.target.files[0]);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
    setFieldValue("status", e.target.value);
  };

  const {
    values,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      studentId: "",
      studentName: "",
      imagePath: "",
      age: "",
      status: "",
    },
    validationSchema: studentAddSchema,
    onSubmit,
  });
  return (
    <div className="w-[300px] h-full p-[10px]">
      <div className="w-full h-[50px] bg-[#E2ECFC] text-[#5B6271] flex justify-start items-center px-[10px]">
        <h1 className="text-[23px] font-semibold">Student Register</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full text-[15px] flex flex-col p-[10px]"
        autoComplete="off"
        action="POST"
      >
        <label htmlFor="studentId">
          <h1 className="text-[14px] font-semibold text-[#5B6271]">
            Student Id
          </h1>
        </label>
        <input
          className={`
          w-full h-[30px] rounded-[5px] p-[5px] my-[10px]
            ${errors.studentId && touched.studentId ? "input-error" : ""}
          `}
          id="studentId"
          type="text"
          value={values.studentId}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.studentId && touched.studentId && (
          <p className="error">{errors.studentId}</p>
        )}

        <label htmlFor="studentName">
          <h1 className="text-[14px] font-semibold text-[#5B6271]">
            Student Name
          </h1>
        </label>
        <input
          className={`
          w-full h-[30px] rounded-[5px] p-[5px] my-[10px]
            ${errors.studentName && touched.studentName ? "input-error" : ""}
          `}
          id="studentName"
          type="text"
          value={values.studentName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.studentName && touched.studentName && (
          <p className="error">{errors.studentName}</p>
        )}

        <label htmlFor="imagePath">
          <h1 className="text-[14px] font-semibold text-[#5B6271]">Image</h1>
        </label>
        <input
          id="imagePath"
          name="imagePath"
          type="file"
          className={`w-full h-[30px] rounded-[5px] my-[10px]
          ${errors.imagePath && touched.imagePath ? "input-error" : ""}`}
          accept="image/*"
          onChange={handleUpload}
          ref={inputImage}
        />
        {errors.imagePath && touched.imagePath && (
          <p className="error">{errors.imagePath}</p>
        )}

        <label htmlFor="age">
          <h1 className="text-[14px] font-semibold text-[#5B6271]">Age</h1>
        </label>
        <input
          className={`
          w-full h-[30px] rounded-[5px] p-[5px] my-[10px]
            ${errors.age && touched.age ? "input-error" : ""}
          `}
          id="age"
          type="number"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}

        <label htmlFor="status">
          <h1 className="text-[14px] font-semibold text-[#5B6271]">Status</h1>
        </label>

        <div className="flex flex-row items-center text-[#5B6271]">
          <label htmlFor="status" className="flex flex-row items-center">
            <input
              id="status"
              name="status"
              type="radio"
              value="active"
              onChange={handleStatus}
            />
            <h1 className="ml-[10px]">Active</h1>
          </label>

          <label
            htmlFor="status"
            className="flex flex-row items-center ml-[20px]"
          >
            <input
              id="status"
              name="status"
              type="radio"
              value="inactive"
              onChange={handleStatus}
            />
            <h1 className="ml-[10px]">Inactive</h1>
          </label>
        </div>
        {errors.status && touched.status && (
          <p className="error">{errors.status}</p>
        )}

        <div className="w-full flex justify-center items-center">
          <button
            className="w-[70%] h-[40px] font-semibold rounded-[5px] border-[2px] border-[#01579B] text-[#8d91a5] hover:text-[#fff] hover:bg-[#01579B] mt-[20px]"
            type="submit"
          >
            <h1>Add</h1>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
