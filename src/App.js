import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Navbar, MenuBar } from "./components/NavBar/Navbar";
import MainPic from "./components/Dashboard-pic/MainPic";
//import your pages here:
import Levels from "../src/pages/levels/levels";
import Sections from "../src/pages/sections/sections";
import Login from "./components/Login/Login";
import Attendances from "./pages/attendance/Attendance";
import StudentSuperAdmin from "./pages/students/StudentSuperAdmin";
import Course from "./pages/courses/course";

function App() {
  // const [menubar, setMenuBar] = useState(false);

  return (
    <div className="all">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route exact path="/" element={<MainPic />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/attendances" element={<Attendances />} />
          <Route path="/StudentSuperAdmin" element={<StudentSuperAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
