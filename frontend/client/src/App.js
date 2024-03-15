import './App.css';
import Home from "../src/routes/home/Home"
import Dashboard from "../src/routes/home/Dashboard"
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [id, setId] = useState();
  const [firstName, setFirstName]  = useState();

  useEffect(() => {
    setId(sessionStorage.getItem("id"));
    setFirstName(sessionStorage.getItem("firstName"));
  },[])
  return (
    <div className="App">
      {id != null ? <Dashboard firstName = {firstName}/> : <Home/>}
    </div>
  );
}

export default App;
