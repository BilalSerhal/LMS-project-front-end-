import './login.css'
import React from 'react';
import { Component, useState } from "react";
import '../StudentSuperAdmin/StudentSuperAdmin'

import axios from 'axios';
import TeacherSuperAdmin from '../StudentSuperAdmin/StudentSuperAdmin';

function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 





  const handleSubmit = async (event) => {
     event.preventDefault();
    try {

      const body = JSON.stringify({ email, password });
  
      var config = {
        method: 'post',
        url: 'http://localhost:8000/api/userLMS/login',
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json',
        },
        data : body
      };
     
      const response=axios(config)
      .then(function (response) {
        
      if (response) {
        alert("login successful");
        window.localStorage.setItem("token", response.data.token);

         window.location.href = "/TeacherSuperAdmin";
       
      } 
      else {
        alert(response.data.message);
      }
      })
      .catch(function (error) {
        console.log("error ",error);
      });
      

      
      if (!email) {
       setErrorMessage('Please enter email');

       return;
      }

      if (!password) {
         setErrorMessage('Please enter a password');
        return ;
      }

      if (!response) {
         setErrorMessage('Please enter a valid email or password');
         return ;
     }


    

    } catch (error) {
      setErrorMessage('wrong email or password', error);
    
    }
  }
    return (
        <div className="main-container-login">
            <div className="adminlogin-box-container">
           <form onSubmit={(e)=>handleSubmit(e)}>
        <h3 className="title-login">Log In</h3>

        <div>
         
          <input
            className="input-login"
            type="email"
            placeholder="Enter your email"
            onChange={handleEmailChange} value={email}
            
          />
        </div>

        <div>
         
          <input
            className="input-login"
            type="password"
            placeholder="Enter your password"
            autoComplete="off"
                  value={password}
                  onChange={handlePasswordChange}
          />
        </div>

        <div >
        {errorMessage && <p className="login-error">{errorMessage}</p>}
          <button className="button-login" type="submit"  >
           Log In
          </button>
          
        </div>
        </form>
        
      
      
            </div>
        </div>
    )
      }
    



export default Login;