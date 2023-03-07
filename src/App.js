import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './components/Login/Login';
import Header from "./components/Header/Header";
import { Navbar, MenuBar } from "./components/NavBar/Navbar";
import Login from './components/Login/Login';
import StudentSuperAdmin from './components/StudentSuperAdmin/StudentSuperAdmin';
import TeacherSuperAdmin from './components//TeacherSuperAdmin/TeacherSuperAdmin';
function App() {

  const [menubar, setMenuBar] = useState(false);
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
      </Routes>
          <Header />
          <div className="app-body">
            <Navbar setMenuBar={setMenuBar} menubar={menubar} />
            <MenuBar menubar={menubar} />
            <Routes>
              {/* <Route exact path="/" element={<MainPic />} />
              <Route path="/levels" element={<Levels />} />
              <Route path="/sections" element={<Sections />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/studants" element={<Students />} /> */}

              <Route path="/StudentSuperAdmin" element={<StudentSuperAdmin />} />
              <Route path="/TeacherSuperAdmin" element={<TeacherSuperAdmin />} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
