import React, { useState, useEffect } from "react";
import "./Attendance.css";
import Dropdown from "react-multilevel-dropdown";
import axios from "axios";
import Header from "../../components/Header/Header";
import { Navbar, MenuBar } from "../../components/NavBar/Navbar";

function Attendance() {
  const [menubar, setMenuBar] = useState(false);
  const [tableMood, setTableMood] = useState(false);
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);

  const dropdownStyles = {
    fontSize: "24px",
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/levels`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleGetStudent = (levelName, sectionName) => {
    axios
      .get(`http://localhost:8000/api/listStudent/${levelName}/${sectionName}`)
      .then((response) => {
        setStudents(response.data);
        setTableMood(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  const [attendanceStatus, setAttendanceStatus] = useState([]);
  const handleStatus = async (id, status) => {
    console.log(id);
    console.log(status);
  
    try {
      const response = await axios.post(
        `http://localhost:8000/api/attendance/createAttendance/${id}`,
        {
          studentId: id,
          status: status,
          date: new Date().toISOString().slice(0, 10), // set current date
        }
      );
  
      console.log(response.data);
      setAttendanceStatus(`${status} recorded for student ${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  



  return (
    <>
      <div>
        <Header />
        <div className="app-body">
          <Navbar setMenuBar={setMenuBar} menubar={menubar} />
          <MenuBar menubar={menubar} />
    <div className="attendances">
      <div className="section">
        <Dropdown
          className="dropdownSection"
          title=" Select Sections"
          position="right"
          buttonVariant="primary"
          style={dropdownStyles}
        >
          {data.map((card) => (
            <Dropdown.Item
              key={card.id}
              style={dropdownStyles}
              className="childSection"
            >
              {card.levelName}
              <Dropdown.Submenu position="right">
                {card.sections.map((section) => (
                  <Dropdown.Item key={card.id}>
                    <h3 onClick={() => handleGetStudent(card.levelName, section.sectionName)}>
                      Section {section.sectionName}
                    </h3>
                  </Dropdown.Item>
                ))}
              </Dropdown.Submenu>
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>
      {tableMood && (
        <div className="createAttendance">
          <div className="gradeAndSection">
            <div className="gradeAttendance">Grade 1</div>
            <div className="sectionAttendance">Section A</div>
          </div>
          <div className="table">
            <ul>
              <li>Student Name</li>
              <li>Attendance</li>
            </ul>
          </div>
          <div className="tableStudent">
            {students.map((student) => (
              <ul key={student.id}>
                <li>
                  {student.firstName} {student.lastName}
                </li>
                <button className="present" onClick={() => handleStatus(student.id, 'present')} >Present</button>
                <button className="absent" onClick={() => handleStatus(student.id, 'absent')} >Absent</button>
                <button className="late" onClick={() => handleStatus(student.id, 'late')} >Late</button>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
    </>
  );
}

export default Attendance;
