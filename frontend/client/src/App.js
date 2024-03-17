import "./App.css";
import Home from "../src/routes/home/Home";
import Dashboard from "../src/routes/home/Dashboard";
import { useState } from "react";
import { useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [id, setId] = useState();

  useEffect(() => {
    if(setId(sessionStorage.getItem("id")) != null){
      setId(sessionStorage.getItem("id"));
    }else{
      setId(sessionStorage.getItem("g_id"));
    }
  }, []);

  return (
    <div className="App">
      {id != null ? <Dashboard /> : <Home/>}
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
