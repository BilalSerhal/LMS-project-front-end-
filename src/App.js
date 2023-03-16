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
    </div>
    </BrowserRouter>
  );
}

export default App;