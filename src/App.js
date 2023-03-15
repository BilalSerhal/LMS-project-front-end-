import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPic from "./components/Dashboard-pic/MainPic";
import Levels from "../src/pages/levels/levels";
import Sections from "../src/pages/sections/sections";
import Attendances from "./pages/attendance/Attendance";
import Students from "./pages/students/Student";
import Teacheres from "./pages/teachers/Teacher";


function App() {
 

  return (
    <div className="all">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPic />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/attendances" element={<Attendances />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teacheres />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
