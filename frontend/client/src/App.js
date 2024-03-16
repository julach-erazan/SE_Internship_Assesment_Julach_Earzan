import './App.css';
import Home from "../src/routes/home/Home"
import Dashboard from "../src/routes/home/Dashboard"
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [id, setId] = useState();

  useEffect(() => {
    setId(sessionStorage.getItem("id"));
  },[])
  return (
    <div className="App">
      {id != null ? <Dashboard/> : <Home/>}
    </div>
  );
}

export default App;
