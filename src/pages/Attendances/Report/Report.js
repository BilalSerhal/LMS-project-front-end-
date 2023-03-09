import React, { useState } from 'react'
import './Report.css'

function Report() {



const attendance = [
    {
        id:1,
        name:"achraf",
        lastName:"AlRachini",
        status:'Present',
        grade:'grade1',
        section:'sectionB',
    },
    {
        id:1,
        name:"bilal",
        status:'Absent',
        grade:'grade1',
        section:'sectionB',
    },
    {
        id:1,
        name:"rasha",
        status:'Present',
        grade:'grade1',
        section:'sectionB',
    },
    {
        id:1,
        name:"ranim",
        status:'absent',
        grade:'grade1',
        section:'sectionB',
    },

]

const [name, setName] = useState('');
const [grade, setGrade] = useState('');
const [section, setSection] = useState('');
return (
    <div>
        <div className='search'>
            <div className='searchName'>
                <input placeholder='Search By Name' onChange={event => setName(event.target.value)} />
            </div>
            <div className='searchSection'>
                <div><input placeholder='Search By Grade' onChange={event => setGrade(event.target.value)}/></div>
                <div><input placeholder='Search By Section' onChange={event => setSection(event.target.value)}/></div>
            </div>
        </div>

        <div className='report'>
        <div className='status'>
            {attendance.filter(Attendance => {
                if(name === ''){
                    return null;
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
        <div className='status'>
            {attendance.filter(Attendance => {
                if(grade === '' && section === ''){
                    return null;
                }
                else if (Attendance.grade.toLowerCase()===(grade.toLowerCase()) && Attendance.section.toLowerCase()===(section.toLowerCase()) ){
                    return Attendance.status;
                }
            })
            .map((Attendance, index)=>(
            <div className='statusByName'>
                <div className='boxStatus1' key={index}>
                    <h5>{Attendance.name} {Attendance.lastName}</h5>
                    <h5>{Attendance.status}</h5>
            </div>
            </div>
            
            ))}
        </div>
        </div>
    </div>
)
}

export default Report
