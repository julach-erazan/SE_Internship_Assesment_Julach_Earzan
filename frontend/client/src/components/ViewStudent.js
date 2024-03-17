import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineDelete } from "react-icons/md";

const ViewStudent = ({onUpdateStudent, onDeleteStudent}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      fetch("http://localhost:8001/viewstudent")
        .then((res) => res.json())
        .then((data) => setData(data.data));
    } catch (error) {
      alert(error.response?.data.message);
    }
  };

  return (
    <div className="w-[calc(100%-300px)] min-w-[350px] h-full p-[10px]">
      <div className="w-full h-[50px] bg-[#E2ECFC] text-[#5B6271] flex justify-start items-center px-[10px]">
        <h1 className="text-[23px] font-semibold">Student Details</h1>
      </div>

      <table className="w-full mt-[20px] text-[#5B6271]">
        <thead>
          <tr className="w-full h-[50px] bg-[#CACACA]">
            <th>
              <h1 className="font-semibold">Id</h1>
            </th>
            <th>
              <h1 className="font-semibold">Name</h1>
            </th>
            <th>
              <h1 className="font-semibold">Image</h1>
            </th>
            <th>
              <h1 className="font-semibold">Age</h1>
            </th>
            <th>
              <h1 className="font-semibold">Status</h1>
            </th>
            <th>
              <h1 className="font-semibold">Actions</h1>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((d) => (
            <tr key={d._id}>
              <td>{d.studentId}</td>
              <td>{d.studentName}</td>
              <td className="flex justify-center">
                <img src={"http://localhost:8001/Images/" + d.imagePath} alt="Pic" className="w-[40px] h-[40px]"/>
              </td>
              <td>{d.age}</td>
              <td>{d.status}</td>
              <td className="flex justify-evenly items-center">
                <button 
                  className="w-[45px] h-[45px] rounded-[5px] flex justify-center items-center text-[green]"
                  onClick = {() => onUpdateStudent(d._id,d.studentId,d.studentName,d.age)}
                >
                  <RxUpdate/>
                </button>

                <button 
                  className="w-[45px] h-[45px] rounded-[5px] flex justify-center items-center text-[red]"
                  onClick = {() => onDeleteStudent(d._id)}
                >
                  <MdOutlineDelete/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudent;
