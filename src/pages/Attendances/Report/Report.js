import React, { useState } from 'react'
import './Report.css'

function Report() {
const attendance = [
    {
        id:1,
        name:"achraf",
        lastName:"AlRachini",
        status:'Present',
    },
    {
        id:1,
        name:"bilal",
        status:'Absent',
    },
    {
        id:1,
        name:"rasha",
        status:'Present',
    },
    {
        id:1,
        name:"ranim",
        status:'absent',
    },

]

const [name, setName] = useState('')
return (
    <div>
        <div className='search'>
            <div className='searchName'>
                <input placeholder='Search By Name' onChange={event => setName(event.target.value)}/>
            </div>
            <div className='searchSection'>
                <input placeholder='Search By Section'/>
            </div>
        </div>

        <div className='status'>
            {attendance.filter(Attendance => {
                if(name === ''){
                    return Attendance;
                }
                else if (Attendance.name.toLowerCase().includes(name.toLowerCase())){
                    return Attendance.status;
                }
            })
            .map((Attendance, index)=>(
            <div className='statusByName'>
                <div className='boxStatus' key={index}>
                    <h5>{Attendance.name} {Attendance.lastName}</h5>
                    <h5>{Attendance.status}</h5>
            </div>
            </div>
            
            ))}
        </div>
    </div>
)
}

export default Report
