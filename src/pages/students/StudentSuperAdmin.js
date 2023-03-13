import "./StudentSuperAdmin.css";
import "./image/student.png";
import student from "./image/student.png";
import Dropdown from "react-multilevel-dropdown";
import { Component, useState, useEffect } from "react";
import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";

function StudentSuperAdmin() {
 
  const [editStudent,setEditStudent]=useState(false);
  const [addStudent,setAddStudent]=useState(false);
  const [levSec,setlevSec]=useState([]);
  const [students,setStudents]=useState([]);
  const [options, setOptions] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);


  const dropdownStyles = {
    fontSize: "34px",
  };

  const handleEditStudent = () => {
    const updateForm = document.getElementById("second-formm");

    updateForm &&
      window.scrollTo({ top: updateForm.offsetTop, behavior: "smooth" });
    setAddStudent(false);
    setEditStudent(true);
  };

  useEffect(() => {
    loadLevelSEction();
  }, []);

  const loadLevelSEction = () => {
    axios
      .get("http://localhost:8000/api/levels")
      .then((response) => {
        setlevSec(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectedStudent = (e, sectionName, levelName) => {
    console.log("levelName ", levelName);
    console.log("sectionName ", sectionName);

    axios
      .get(`http://localhost:8000/api/listStudent/${levelName}/${sectionName}`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOpenAddStudent =() =>{
     

    setAddStudent(true);
  }
  
  const handleAddStudent = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
  
    const newUser = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: "student",
      phoneNumber: formData.get("phoneNumber"),
      levelName: formData.get("levelName"),
      sectionName: selectedValues[0],
    };

    console.log("userbody ",newUser);
  
    axios
      .post("http://localhost:8000/api/userLMS", newUser)
      .then((response) => {
        console.log("New student added: ", response.data);
        setStudents([...students, response.data]);
        setAddStudent(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sections")
      .then((response) => {
        setOptions(response.data); // assuming response is an array of objects with a name property
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const onSelect = (selectedList, selectedItem) => { 
    setSelectedValues(selectedList);
  };

  const onRemove = (selectedList, removedItem) => {
    setSelectedValues(selectedList);
  };


  return (
    <>
      <div className="lol">
        <div className="first-buttons">
          <Dropdown
            className="dropdownSection button  coll-btn-select"
            title=" Select Sections"
            position="right"
            buttonVariant="primary"
            style={dropdownStyles}
          >
            {levSec.map((card, key) => (
              <Dropdown.Item
                key={key}
                style={dropdownStyles}
                className="childSection"
                value={card.id}
              >
                {card.levelName}

                <Dropdown.Submenu position="right">
                  {card.sections.map((section, key2) => (
                    <Dropdown.Item
                      key={key2}
                      onClick={(e) =>
                        selectedStudent(e, section.sectionName, card.levelName)
                      }
                      value={section.id}
                    >
                      <h3 name="sectionName">Sections {section.sectionName}</h3>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Submenu>
              </Dropdown.Item>
            ))}
          </Dropdown>

          <form className="searchStudentButton" action="/" method="get">
            <input
              type="text"
              id="header-search"
              placeholder="Search for Student"
              name="searchStudent"
            />

            <button type="submit" className=" search-btns">
              Search
            </button>
          </form>

          <button
            className="button  coll-btns"
            id="add-btn"
            onClick={handleOpenAddStudent}
          >
            Add
          </button>
        </div>

        <div className="mappingdata">
          {students.map((item, index) => {
            // {console.log("temmm",item.levelName, item.sectionName)}
            return (
              <div key={index}>
                <div className="infopart">
                  <img className="student-img" src={student} alt="img" />
                  <hr />
                  <br />
                  <div className="align-info">
                    Name:
                    {item.firstName} {item.lastName}
                    <br />
                    Email:
                    {item.email}
                    <br />
                    Phone Number:
                    {item.phoneNumber}
                    <br />
                    <br />
                  </div>

                  <button
                    className="button collection-button"
                    onClick={handleEditStudent}
                  >
                    Update
                  </button>
                  <br />
                  <button className=" button collection-button">Delete</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="formm">
          {addStudent && (
            <form
              className="firstt-formm"
              id="firstt-formm"
              onSubmit={handleAddStudent}
            >
              <br />
              <legend className="legendd">Add Student Info</legend>
              <br />

              <label className="alignForm">
                First name:
                <input
                  className="textForm"
                  type="text"
                  name="firstName"
                  
                  required
                ></input>
              </label>
              <br />
              <label className="alignForm">
                Last name{" "}
                <input
                  className="textForm"
                  type="text"
                  name="lastName"
                  required
                 
                ></input>
              </label>
              <br />
              <label className="alignForm">
                Email{" "}
                <input
                  className="textForm"
                  type="email"
                  name="email"
                  required
                 
                ></input>
              </label>
              <br />
              <label className="alignForm">
                Password{" "}
                <input
                  className="textForm"
                  type="text"
                  name="password"
                  required
               
                ></input>
              </label>
              <br />
              <input
                type="text"
                name="role"
               
                required
              ></input>
              <label className="alignForm">
                Phone number{" "}
                <input
                  className="textForm"
                  type="text"
                  name="phoneNumber"
                  required
                 
                ></input>
              </label>
              <br />
              <label for="type" className="alignForm">
                Student Level:
                <Multiselect
                   selectionLimit={1}
                    className="class-inputR"
                    options={options}
                    selectedValues={selectedValues[0]}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="sectionName"
                    name="levelName"
                  />
                {/* <select
                  id="typee"
                  name="levelName"
                
                >
                  <option value="" selected></option>
                  {levSec.map((card, key) => (
                    <option key={key} value={card.id}  onClick={(e) =>
                      handleAddStudent(e, card.levelName)
                    } >
                      {card.levelName} 
                    </option>
                  ))}
                </select> */}
              </label>
              <br />
              <label for="type" className="alignForm">
                Student Section:
                <Multiselect
                   selectionLimit={1}
                    className="class-inputR"
                    options={options}
                    selectedValues={selectedValues[0]}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="sectionName"
                    name="sectionName"
                  />
                  {console.log(selectedValues[0])}

                {/* <select
                  id="typee"
                  name="sectionName"
                 
                >
                  <option value="" selected></option>
                  {levSec.map((card, key) =>
                    card.sections.map((section, key2) => (
                      <option key={key2} value={section.id}  onClick={(e) =>
                        handleAddStudent(e, section.sectionName)
                      } >
                        {section.sectionName}
                       
                      </option>
                    ))
                  )}
                </select> */}
              </label>

              <br />

              <input type="submit" className="button colle-btn"></input>
              <input
                type="submit"
                value="close"
                onClick={() => window.location.reload()}
                className="button colle-btn"
              ></input>
              <br />
            </form>
          )}

          {editStudent && (
            <form className="second-formm" id="second-formm">
              <br />
              <legend className="legendd" id="update-btn">
                Update Student Info
              </legend>
              <br />

              <label className="alignForm">
                Enter student first name:
                <input type="text" name="firstName" required></input>
              </label>
              <br />
              <label className="alignForm">
                Enter student last name{" "}
                <input type="text" name="lastName" required></input>
              </label>
              <br />
              <label className="alignForm">
                Enter student Email{" "}
                <input type="email" name="email" required></input>
              </label>
              <br />
              <label className="alignForm">
                Enter student password{" "}
                <input type="text" name="password" required></input>
              </label>
              <br />
              <label className="alignForm">
                Enter student phone number{" "}
                <input type="text" name="phoneNumber" required></input>
              </label>
              <br />
              <label for="type" className="alignForm">
                Choose Student Class:
                <br />
                <select id="typee" name="levelName" className="alignForm">
                  <option selected></option>
                  <option value="art">Grade 1</option>
                  <option value="sport">Grade 2</option>
                  <option value="photography">Grade 3</option>
                  <option value="pattern">Grade 4</option>
                </select>
              </label>
              <br />
              <label for="type" className="alignForm">
                Choose Student Section:
                <select id="typee" name="sectionName">
                  <option selected></option>
                  <option value="art">A</option>
                  <option value="sport">B</option>
                  <option value="photography">C</option>
                  <option value="pattern">D</option>
                </select>
              </label>
              <br />

              <input type="submit" className="button colle-btn"></input>
              <input
                type="submit"
                value="close"
                onClick={() => window.location.reload()}
                className="button colle-btn"
              ></input>
              <br />
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default StudentSuperAdmin;
