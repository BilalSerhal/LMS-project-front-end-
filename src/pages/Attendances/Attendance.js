import React, { useState } from "react";
import "./Attendance.css";
import Dropdown from "react-multilevel-dropdown";

function Attendance() {
const dropdownStyles = {
fontSize: "24px",
};

const student = [
    {
        id:1,
        firstName:'Achraf',
        lastName:'Al Rachini'

    },
    {
        id:2,
        firstName:'Ranim',
        lastName:'CodiB09'

    },
    {
        id:3,
        firstName:'Rasha',
        lastName:'Badran'

    }
]

const cards = [
{
id: 1,
levelName: "grade 1",
sections: [
{
id: 1,
sectionName: "A",
},
{
id: 2,
sectionName: "B",
},
{
id: 3,
sectionName: "C",
},
{
id: 2,
sectionName: "B",
},
],
},
{
id: 2,
levelName: "grade 2",
sections: [
{
id: 1,
sectionName: "A",
},
{
id: 2,
sectionName: "B",
},
],
},
{
id: 3,
levelName: "grade 3",
sections: [
{
id: 1,
sectionName: "A",
},
],
},
{
id: 4,
levelName: "grade 4",
sections: [
{
id: 2,
sectionName: "B",
},
{
id: 4,
sectionName: "D",
},
],
},
];

const [tableMood, setTableMood] = useState(false);

const handleGetStudent = ()=> {
    setTableMood(true);

}
return (
<div className="attendances">
<div className="section">
<Dropdown
className="dropdownSection"
title=" Select Sections"
position="right"
buttonVariant="primary"
style={dropdownStyles}
>
{cards.map((card) => (
<Dropdown.Item key={card.id}style={dropdownStyles} className="childSection">
{card.levelName}
<Dropdown.Submenu position="right">
{card.sections.map((section)=>

<Dropdown.Item key={section.id}>
<h3 onClick={handleGetStudent}>Sections {section.sectionName}</h3>
</Dropdown.Item>)}
</Dropdown.Submenu>
</Dropdown.Item>
))}
</Dropdown>

</div>
{tableMood && (
<div className='createAttendance'>
        <div className='gradeAndSection'>
            <div className='gradeAttendance'>Grade 1</div>
            <div className='sectionAttendance'>Section A</div>
        </div>
        <div className='table'>
            <ul>
                <li>Student Name</li>
                <li>Attendance</li>
            </ul>
        </div>
        <div className='tableStudent'>
            {student.map ((student)=>
            <ul key={student.id}>
            <li>{student.firstName} {student.lastName}</li>
            <button className='present'>Present</button>
            <button className='absent'>Absent</button>
            <button className='late'>Late</button>
        </ul>
        )}
            
            

        </div>
    
            
</div>

)}
</div>
);
}

export default Attendance;