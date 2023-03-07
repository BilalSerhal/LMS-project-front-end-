import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './components/Login/Login'
import Login from './components/Login/Login';
import TeacherSuperAdmin from './components/Dashboard/TeacherSuperAdmin';
function App() {
 
    
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/TeacherSuperAdmin" element={<TeacherSuperAdmin/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
