import React, { useState, useEffect } from "react";
import "./Attendance.css";
import Dropdown from "react-multilevel-dropdown";
import axios from "axios";
import Header from "../Header/Header";
import { Navbar, MenuBar } from "../NavBar/Navbar";
import { useNavigate } from "react-router-dom";

function Attendance() {
  const [menubar, setMenuBar] = useState(false);
  const [tableMood, setTableMood] = useState(false);
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

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
        setSelectedLevel(levelName);
        setSelectedSection(sectionName);
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
        `http://localhost:8000/api/attendance/createAttendance`,
        {
          studentId: id,
          status: status,
          
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
                  <Dropdown.Item key={card.id} className="childSection">
                    {card.levelName}
                    <Dropdown.Submenu position="right">
                      {card.sections.map((section) => (
                        <Dropdown.Item key={card.id}>
                          <h3
                            onClick={() =>
                              handleGetStudent(
                                card.levelName,
                                section.sectionName
                              )
                            }
                          >
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
                 <div className='gradeAndSection'>
                   <div className='gradeAttendance'>{selectedLevel}</div>
                   <div className='sectionAttendance'>Section {selectedSection}</div>
                 </div>
                <div className="attendance-section">
                  <table className="attendance-table">
                    <thead>
                      <tr className="attendance-tr">
                        <th className="attendance-th nameA">Student Name</th>
                        <th className="attendance-th nameAA">Attendance</th>
                        <th className="attendance-th nameAA">Attendance</th>
                        <th className="attendance-th nameAA">Attendance</th>
                      </tr>
                    </thead>
                    {students.map((student) => (
                      <tbody key={student.id}>
                        <tr className="attendance-tr rowR row1R">
                          <td className="attendance-td nameA1">
                            {student.firstName} {student.lastName}
                          </td>

                          <td className="attendance-td icon1">
                            <button
                              className="present"
                              onClick={() =>
                                handleStatus(student.id, "present")
                              } 
                            >
                              Present
                            </button>
                          </td>
                          <td className="attendance-td icon1">
                            <button
                              className="absent"
                              onClick={() => handleStatus(student.id, "absent")} 
                            >
                              Absent
                            </button>
                          </td>
                          <td className="attendance-td icon1">
                            <button
                              className="late"
                              onClick={() => handleStatus(student.id, "late")} 
                            >
                              Late
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
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
