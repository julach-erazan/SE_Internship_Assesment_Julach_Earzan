import React from "react";
import { useState } from "react";
import AddStudent from "../../components/AddStudent";
import Navbar from "../../components/Navbar";
import UpdateStudent from "../../components/UpdateStudent";
import ViewStudent from "../../components/ViewStudent";
import { handleDeleteStudent } from "../../controller/handleDeleteStudent";

const Dashboard = () => {
  const [_viewStudent, setViewStudent] = useState(true);
  const [_addStudent, setAddStudent] = useState(true);
  const [_updateStudent, setUpdateStudent] = useState(false);
  const [data, setData] = useState({
    id: "",
    studentId: "",
    studentName: "",
    age: "",
  });

  const updateStudent = (id, studentId, studentName, age) => {
    setAddStudent(false);
    setUpdateStudent(true);
    setData({
      ...data,
      id: id,
      studentId: studentId,
      studentName: studentName,
      age: age,
    });
  };

  const close = () => {
    setAddStudent(true);
    setUpdateStudent(false);
  };

  const deleteStudent = (id) => {
    handleDeleteStudent(id);
  };

  return (
    <div className="w-screen h-screen bg-[#FAFAFA]">
      <Navbar />
      <div className="w-full h-[90vh] flex flex-row items-center">
        {_updateStudent ? <UpdateStudent data = {data} onClose={close} /> : ""}
        {_addStudent ? <AddStudent /> : ""}
        {_viewStudent ? (
          <ViewStudent
            onUpdateStudent={updateStudent}
            onDeleteStudent={deleteStudent}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dashboard;
