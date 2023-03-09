import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
// import Levels from '../src/pages/levels/levels';
// import Sections from '../src/pages/sections/sections';
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Navbar,MenuBar} from "./components/NavBar/Navbar"
import Course from "./components/course";

function App() {
  const [menubar, setMenuBar] = useState(false);
  return (
    <div className="all">
    <Router>
        <Header/>
        <div className="app-body">
        <Navbar setMenuBar={setMenuBar} menuBar={menubar}/>
        <MenuBar menubar={menubar}/>

      <Routes>
        {/* <Route exact path="/" element={<Home/>}/> */}
        {/* <Route path="/levels" element={<Levels/>}/> */}
        <Route path="/Course" element={<Course/>}/>
        {/* <Route path="/sections" element={<Sections/>}/> */}
      </Routes>
      </div>
    </Router>
    </div>
  );
  }

export default App;