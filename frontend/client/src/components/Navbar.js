import React, { useState } from 'react'
import { useEffect } from 'react';

const Navbar = () => {
  const [firstName, setFirstName] = useState();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    if(sessionStorage.getItem("firstName") != null){
      setFirstName(sessionStorage.getItem("firstName"));
    }else{
      setFirstName(searchParams.get("firstName"));
    }
  },[])

  const handleLogOut = () => {
    sessionStorage.clear("id");
    sessionStorage.clear("firstName");
    sessionStorage.clear("g_id");
    sessionStorage.clear("g_firstName");
    window.location = "/";
  };
  return (
    <div className="w-full min-w-[300px] h-[50px] bg-[#E2ECFC] text-[#5B6271] flex justify-between items-center px-[10px]">
        <h1 className="text-[23px] font-semibold">
          <span className="text-[#01579D]">Hi,&nbsp;&nbsp;</span>
          {firstName}
        </h1>
        <button
          className="w-[100px] h-[40px] font-semibold rounded-[5px] border-[2px] border-[#01579B] text-[#8d91a5] hover:text-[#fff] hover:bg-[#01579B] flex justify-center items-center"
          onClick={handleLogOut}
        >
          <h1>Logout</h1>
        </button>
      </div>
  )
}

export default Navbar
