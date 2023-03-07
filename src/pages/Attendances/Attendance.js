import React from "react";
import "./Attendance.css";
import Dropdown from "react-multilevel-dropdown";

function Attendance() {
const dropdownStyles = {
    fontSize: "34px",
};

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
                <Dropdown.Item  key={card.id}style={dropdownStyles} className="childSection">
                    {card.levelName}
                    <Dropdown.Submenu position="right">
                    {card.sections.map((section)=>

                    <Dropdown.Item key={section.id}>
                        <h3>Sections {section.sectionName}</h3>
                    </Dropdown.Item>)}
                    
                    </Dropdown.Submenu>
                    
            
        </Dropdown.Item>
            ))}
        </Dropdown>

        
    </div>
    </div>
);
}


export default Attendance;
