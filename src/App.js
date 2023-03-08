import MainPic from "./components/Dashboard-pic/MainPic";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import {Routes ,Route} from 'react-router-dom';
import './app.css';
import Attendance from "./pages/Attendances/Attendance"
import Report from "./pages/Attendances/Report/Report";

function App(onChange) {
  return (
    <div >
      <div className="all">

      <Router>
      <Header/>      
      <div className="app-body">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<MainPic/>}/>
        <Route path="/attendances"  element={<Attendance/>}/>
        <Route path="/report"  element={<Report/>}/>
    </Routes>
      </div>
      </Router>
      </div>
      
    </div>
  );
}

export default App;
