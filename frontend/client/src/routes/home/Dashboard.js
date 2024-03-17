import React from "react";
import { useEffect, useState } from "react";
import AddStudent from "../student/AddStudent";
import Navbar from "../../components/Navbar";
import UpdateStudent from "../student/UpdateStudent";
import ViewStudent from "../student/ViewStudent";
import { handleDeleteStudent } from "../../controller/handleDeleteStudent";

const Dashboard = () => {

  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    const firstName = searchParams.get('firstName');

    setId(id);
    setFirstName(firstName);

  }, []);

  sessionStorage.setItem('g_id', id);
  sessionStorage.setItem("g_firstName", firstName);

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
          <ViewStudent
            onUpdateStudent={updateStudent}
            onDeleteStudent={deleteStudent}
          />
      </div>
    </div>
  );
};

export default Dashboard;
