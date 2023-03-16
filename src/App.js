import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
// import Levels from '../src/pages/levels/levels';
// import Sections from '../src/pages/sections/sections';
import { useEffect, useState } from "react";
import "./App.css";

import Course from "./components/course";
import { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './components/Login/Login';
import Login from './components/Login/Login';
import StudentSuperAdmin from './components/StudentSuperAdmin/StudentSuperAdmin';
import TeacherSuperAdmin from './components//TeacherSuperAdmin/TeacherSuperAdmin';


function App() {

  const [menubar, setMenuBar] = useState(false);
  
  return (
    <div >
      Hello
    </div>
  );

  }
 {/* <Route exact path="/" element={<MainPic />} />
              <Route path="/levels" element={<Levels />} />
              <Route path="/sections" element={<Sections />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/studants" element={<Students />} /> */}

export default App;