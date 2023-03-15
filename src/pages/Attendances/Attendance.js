import React, { useState, useEffect } from "react";
import "./Attendance.css";
import Dropdown from "react-multilevel-dropdown";
import axios from "axios";

function Attendance() {
  const dropdownStyles = {
    fontSize: "24px",
  };

  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
  const [buttonStatus, setButtonStatus] = useState({});
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

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

  const [attendanceStatus, setAttendanceStatus] = useState([]);

  const handleStatus = async (id, status) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/attendance/createAttendance`,
        {
          studentId: id,
          status: status,
        }
      );
      console.log(response.data);
      setAttendanceStatus(`${status} ${id}`);
      setButtonStatus((prevState) => ({ ...prevState, [id]: status }));

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [tableMood, setTableMood] = useState(false);

  const handleGetStudent = (levelName, sectionName) => {
    const url = `http://localhost:8000/api/listStudent/${levelName}/${sectionName}`;
    axios
      .get(url)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setSelectedLevel(levelName);
    setSelectedSection(sectionName);
    setTableMood(true);
  };
  return (
    <div className="attendances">
      <div className="section">
        <Dropdown
          className="dropdownSection"
          title=" Select Grade"
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
                  <Dropdown.Item key={section.id}>
                    <h3
                      onClick={() =>
                        handleGetStudent(card.levelName, section.sectionName)
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
          <div className="gradeAndSection">
            <div className="gradeAttendance">{selectedLevel}</div>
            <div className="sectionAttendance">Section {selectedSection}</div>
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
                <button
                  className="present"
                  onClick={() => handleStatus(student.id, "Present")}
                  style={{
                    backgroundColor:
                      buttonStatus[student.id] === "Present" ? "green" : "",
                  }}
                >
                  Present
                </button>
                <button
                  className="absent"
                  onClick={() => handleStatus(student.id, "Absent")}
                  style={{
                    backgroundColor:
                      buttonStatus[student.id] === "Absent" ? "red" : "",
                  }}
                >
                  Absent
                </button>
                <button
                  className="late"
                  onClick={() => handleStatus(student.id, "Late")}
                  style={{
                    backgroundColor:
                      buttonStatus[student.id] === "Late" ? "yellow" : "",
                  }}
                >
                  Late
                </button>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Attendance;
