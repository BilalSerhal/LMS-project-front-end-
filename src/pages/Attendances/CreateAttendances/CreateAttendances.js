import React from 'react'
import './CreateAttendances.css'

function CreateAttendances() {
return (
    <div className='createAttendance'>
        <div className='gradeAndSection'>
            <div className='gradeAttendance'>Grade 1</div>
            <div className='sectionAttendance'>Section A</div>
        </div>
        <div className='table'>
            <ul>
                <li>First Name</li>
                <li>Last Name</li>
                <li>Attendance</li>
            </ul>
        </div>
        <div className='tableStudent'>
            <ul>
                <li>Achraf</li>
                <li>Al Rachini</li>
                <button className='present'>P</button>
                <button className='absent'>A</button>
                <button className='late'>L</button>
            </ul>
            <ul>
                <li>Achraf</li>
                <li>Al Rachini</li>
                <button className='present'>P</button>
                <button className='absent'>A</button>
                <button className='late'>L</button>
            </ul>

        </div>
            
                
    </div>
)
}

export default CreateAttendances
