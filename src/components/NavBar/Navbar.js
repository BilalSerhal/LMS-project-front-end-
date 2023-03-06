import React from 'react';
import './Navbar.css';
import attendance from './image/attendance.png';
import classroom from './image/classroom.png';
import monitor from './image/monitor.png';
import power from './image/power.png';
import presentation from './image/presentation.png';

function Navbar() {
return (
    <div className='container'>
        <div className='navbar'>
            
        <div className='dashboard_main'>
            <div className='dashboard'>
            <img  className='img_dashboard' src={monitor}alt=''/>
            <div className='text'><a href='www.google.com'>DashBoard</a></div>
            </div>
           
        </div>
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src={presentation} alt=''/>
            <div className='text'><a href='www.google.com'>Teachers</a></div>
        </div>
        </div>
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src={classroom} alt=''/>
            <div className='text'><a href='/levels'>Classes</a></div>
            </div>
        </div>
        
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src={attendance} alt=''/>
            <div className='text'><a href='www.google.com'>Attendance</a></div>
            </div>
        </div>
    </div>
    <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src={power} alt=''/>
            <div className='text'><a href='www.google.com'>Logout</a></div>
            </div>
        </div>

    
        
    </div>
)
}

export default Navbar