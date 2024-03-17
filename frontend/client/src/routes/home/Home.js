import React from "react";
import Login from "../admin/Login";
import Register from "../admin/Register";

const Home = () => {
  return (
    <div className="w-screen lg:h-screen flex flex-col lg:flex-row justify-evenly items-center bg-[#FAFAFA]">
      <Login/>
      <hr className="w-[80%] h-[4px] lg:w-[4px] lg:h-[80%] lg:my-0 bg-[#E2ECFC] border-none" />
      <Register />
    </div>
  );
};

export default Home;
