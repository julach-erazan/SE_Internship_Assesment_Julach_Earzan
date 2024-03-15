import React from 'react'

const Dashboard = (props) => {
  const logOut = () => {
    sessionStorage.clear("id");
    sessionStorage.clear("firstName");
    window.location.reload();
  }
  return (
    <div>
      {props.firstName}
      Hello
      <button
      onClick={logOut}
      >Logout</button>
    </div>
  )
}

export default Dashboard
