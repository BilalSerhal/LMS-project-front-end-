import "./Student.css";
import "./image/student.png";
import Header from "../../components/Header/Header";
import { Navbar, MenuBar } from "../../components/NavBar-pages/Navbar-pages";
import studen from "./image/student.png";
import Dropdown from "react-multilevel-dropdown";
import { useState, useEffect } from "react";
import axios from "axios";


function Student() {
  const [menubar, setMenuBar] = useState(false);
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
 
  const dropdownStyles = {
    fontSize: "26px",
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
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <Header />
        <div className="app-body">
          <Navbar setMenuBar={setMenuBar} menubar={menubar} />
          <MenuBar menubar={menubar} />
          <div className="lol">
            <div className="first-buttons">
            <Dropdown
                className="student-drop"
                title=" Select Sections"
                position="right"
                buttonVariant="primary"
                style={dropdownStyles}
              >
                {data.map((card) => (
                  <Dropdown.Item key={card.id} className="student-drop-chid">
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
            <div className="mappingdata1">
              {students.map((student) => {
                // {console.log("temmm",item.levelName, item.sectionName)}
                return (
                  <div key={student.id}>
                    <div className="infopart-page1">
                      <img className="student-img1" src={studen} alt="img" />
                      <hr />
                      <br />
                      <div className="align-info1">
                        Name:
                        {student.firstName} {student.lastName}
                        <br />
                        Email:
                        {student.email}
                        <br />
                        Phone Number:
                        {student.phoneNumber}
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
