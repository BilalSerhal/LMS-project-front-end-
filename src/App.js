import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Navbar, MenuBar } from "./components/NavBar/Navbar";
import MainPic from "./components/Dashboard-pic/MainPic";
//import your pages here:
import Levels from '../src/pages/levels/levels';
import Sections from '../src/pages/sections/sections';



function App() {
  const [menubar, setMenuBar] = useState(false);

  return (
    <div className="all">
    <Router>
      {/* <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes> */}
        <Header/>
        <div className="app-body">
        <Navbar setMenuBar={setMenuBar} menubar={menubar} />
        <MenuBar menubar={menubar} /> 
      <Routes>
        <Route exact path="/" element={<MainPic/>}/>
        <Route path="/levels" element={<Levels/>}/>
        <Route path="/sections" element={<Sections/>}/>
        {/* <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/studants" element={<Students/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/attendances" element={<Attendances/>}/> */}
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
