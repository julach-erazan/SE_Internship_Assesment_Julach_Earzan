import "./App.css";
import Home from "../src/routes/home/Home";
import Dashboard from "../src/routes/home/Dashboard";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [id, setId] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const storedId = searchParams.get("id") || sessionStorage.getItem("id") || sessionStorage.getItem("g_id");
    if (storedId) {
      setId(storedId);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {id && <Route path="/dashboard" element={<Dashboard />} />}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;