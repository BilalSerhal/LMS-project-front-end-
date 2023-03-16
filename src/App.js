import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './components/Login/Login';
import Login from './components/Login/Login';
import StudentSuperAdmin from './components/StudentSuperAdmin/StudentSuperAdmin';
import TeacherSuperAdmin from './components//TeacherSuperAdmin/TeacherSuperAdmin';
import Course from "./components/course";

import MainPic from "./components/Dashboard-pic/MainPic";
import Levels from "../src/pages/levels/levels";
import Sections from "../src/pages/sections/sections";
import Attendances from "./pages/attendance/Attendance";
import Students from "./pages/students/Student";
import Teacheres from "./pages/teachers/Teacher";
import Report from "./pages/Report/Report";

function App() {
 

  return (
    <BrowserRouter>
    <div className="all">
    <Router>
      <Routes>
      
        <Route path="/Course" element={<Course/>}/>
         <Route path="/" element={<Login />} />
          <Route path="/StudentSuperAdmin" element={<StudentSuperAdmin />} />
          <Route path="/TeacherSuperAdmin" element={<TeacherSuperAdmin />} />
      </Routes>
      
    </Router>
   
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPic />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/attendances" element={<Attendances />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teacheres />} />
          <Route path="/report"  element={<Report/>}/>
        </Routes>
      </Router>
    </div>
    </BrowserRouter>
  );
}

export default App;