import React from 'react'
import './Navbar.css'

function Navbar() {
return (
    <div className='container'>
        <div className='navbar'>
            
        <div className='dashboard_main'>
            <div className='dashboard'>
            <img  className='img_dashboard' src='/pictures/monitor.png' alt=''/>
            <div className='text'><a href='www.google.com'>DashBoard</a></div>
            </div>
        
        </div>
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src='/pictures/presentation.png' alt=''/>
            <div className='text'><a href='www.google.com'>Teachers</a></div>
            </div>
        </div>
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src='/pictures/classroom.png' alt=''/>
            <div className='text'><a href='www.google.com'>Classes</a></div>
            </div>
        </div>
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src='/pictures/sections.png' alt=''/>
            <div className='text'><a href='www.google.com'>Sections</a></div>
            </div>
        </div>
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src='/pictures/courses.png' alt=''/>
            <div className='text'><a href='www.google.com'>Courses</a></div>
            </div>
        </div>
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src='/pictures/attendance.png' alt=''/>
            <div className='text'><a href='www.google.com'>Attendance</a></div>
            </div>
        </div>
    </div>
    <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src='/pictures/power.png' alt=''/>
            <div className='text'><a href='www.google.com'>Logout</a></div>
            </div>
        </div>

    
        
    </div>
)
}

export default Navbar
