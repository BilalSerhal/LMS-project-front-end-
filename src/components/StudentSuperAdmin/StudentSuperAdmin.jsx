import './StudentSuperAdmin.css';
import './images/student.png'
import student from "./images/student.png"
import  Dropdown from "react-multilevel-dropdown"
import { Component, useState,useEffect } from "react";
import axios from 'axios';


function StudentSuperAdmin(){




  const dropdownStyles = {
    fontSize: "34px",
    };

const [levelName, setLevel] = useState('Grade1');
const [sectionName, setSection] = useState('A');
const [editStudent,setEditStudent]=useState(false);
const [addStudent,setAddStudent]=useState(false);
const [levSec,setlevSec]=useState([]);
const [students,setStudents]=useState([]);
const [studentCollection, postStudent] = useState("");
const [value, setValue] = useState("student");

useEffect(()=>{  
  loadLevelSEction()
     },[] )

useEffect(()=>{
  selectedStudent()
},[])



const handleEditStudent= async(e)=>{
  e.preventDefault();
  console.log("student",studentCollection);
const updateForm= document.getElementById('second-formm');
  updateForm&& window.scrollTo({ top: updateForm.offsetTop, behavior: "smooth" });
  setAddStudent(false);
  setEditStudent(true);
  postStudent({ ...studentCollection, [e.target.name]: e.target.value });
  let formData = new FormData();
    formData = studentCollection;
    console.log("nftcollection ", studentCollection)


    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
  try {
    const response = await axios.post("http://localhost:8000/api/userLMS", formData, config);
    alert("You have add an Nft it!")
    window.location.reload(true);
    console.log("response ", response)
  } catch (err) {
    console.log("error", err);
  }
};
  


//delete student

const deleteStudent = async (id) => {
  console.log("id ", id)
  const url = `http://localhost:8000/api/userLMS/${id}`;
  console.log("url ",url)
  try{
    const response = await axios.delete(url)
    console.log("reponse ",response);
    selectedStudent();
    alert("You have delete it!")
    window.location.reload(true);
  }
  catch(error){
    console.log("error ",error)
  }
}

//get level section
const loadLevelSEction=()=>{
  
  axios.get('http://localhost:8000/api/levels')
  .then((response)=> {
            setlevSec(response.data);
                }) 
                    .catch((error)=>{ 
                             console.log(error);
                                })
}

const changingParams=(e)=>{
  e.preventDefault();
  postStudent({ ...studentCollection, [e.target.name]: e.target.value });
}
const handleAddStudent=async (e)=>{
  e.preventDefault();
  console.log("student",studentCollection);
  const addForm= document.getElementById('firstt-formm');
  
  addForm&& window.scrollTo({ top: addForm.offsetTop, behavior: "smooth" });
  setEditStudent(false)
  setAddStudent(true);
  
  let formData = new FormData();
    formData = studentCollection;
    console.log("nftcollection ", studentCollection)


    
  try {
    const response = await axios.post("http://localhost:8000/api/userLMS", formData);
    alert("You have add an Nft it!")
    window.location.reload(true);
    console.log("response ", response)
  } catch (err) {
    console.log("error", err);
  }


}




const selectedStudent = async(e,section_id, grade_id) => {
  e.preventDefault();
  
  
  console.log("section ",section_id);
  console.log("course ",grade_id);

  setLevel(grade_id);
  setSection(section_id);
    const res = await axios.get(`http://localhost:8000/api/listStudent/${grade_id}/${section_id}`)
    console.log("dataaa ",res.data);
    setStudents(res.data);


}








  

    return (
        <>
          
           <div className='lol'>
                <div className='first-buttons'>  
                  <Dropdown
                    className="dropdownSection button  coll-btn-select"
                    title=" Select Sections"
                    position="right"
                    buttonVariant="primary"
                    style={dropdownStyles}
                    >
                    {levSec.map((card,key) => (
                      <Dropdown.Item key={key} style={dropdownStyles} className="childSection" value={card.id}>
                       
                        {card.levelName} {card.id}
                      
                    <Dropdown.Submenu position="right"   >
                      {card.sections.map((section,key2)=>

                    <Dropdown.Item key={key2} onClick={(e)=>selectedStudent(e,section.sectionName, card.levelName)} value={section.id}>
                    <h3 name='sectionName'>Sections {section.sectionName} {section.id}</h3>
                    </Dropdown.Item>)}
                    </Dropdown.Submenu>
                      </Dropdown.Item>
                        ))}
                      </Dropdown>

                      <form className='searchStudentButton' action="/" method="get">
        
        <input
            type="text"
            id="header-search"
            placeholder="Search for Student"
            name="searchStudent" />
        
        <button type="submit"  className=' search-btns'>Search</button>
        
    </form>
        
          
                       <button className='button  coll-btns' id='add-btn' onClick={handleAddStudent} 
                          >Add</button>
         
                        </div>   

              
              <div className='mappingdata'>
           
                        
                {students.map((item, index) => {
                  // {console.log("temmm",item.levelName, item.sectionName)}
                  return (
                    item ? 
                      <div key={index}>

                      <div className='infopart'>
                      <img className="student-img" src={student} alt="img" />
                      <hr/>
                    <br />
                    <div className='align-info'>
                        Name:
                        {item.firstName}
                        {" "}
                        {item.lastName}
                        <br/>
                        
                        Email:
                        {item.email}
                        
                        <br/>
                       
                        Phone Number:
                        {item.phoneNumber}
                       
                        <br/>
                        <br/>
                       </div>
                        
                        <button className='button collection-button' onClick={handleEditStudent}>Update</button>
                          <br/>
                          {console.log("id",item ? item.id :null)}
                        <button className=' button collection-button' onClick={() => deleteStudent(item.id)} >Delete</button>
                        
                      </div>
    
                    </div>
                    : null
                  
                  )
                })}
              </div>
              
              
          <div  className='formm' >
            
          {addStudent &&(
          <form className='firstt-formm' id='firstt-formm' onSubmit={handleAddStudent}>
          <br />
          <legend className='legendd'>Add Student Info</legend>
          <br />

          <label className='alignForm'>First name:<input className='textForm' type='text' value={studentCollection.firstName} name="firstName" onChange={changingParams} required></input></label>
          <br/>
          <label className='alignForm'>Last name <input className='textForm' type='text' name="lastName" value={studentCollection.lastName} onChange={changingParams} required></input></label>
          <br />
          <label className='alignForm'>Email <input className='textForm' type='email' name="email" value={studentCollection.email} onChange={changingParams} required></input></label>
          <br />
          <label className='alignForm'>Password <input className='textForm' type='text' name="password" value={studentCollection.password} onChange={changingParams} required></input></label>
          <br />
          <input type="text" name="role" value={studentCollection.role} onChange={changingParams}  required></input>
          
          <label className='alignForm'>Phone number <input className='textForm' type='text' name="phoneNumber" value={studentCollection.phoneNumber} onChange={changingParams} required></input></label>
          <br />
          <label for="type" className='alignForm'>Student Level:
          <select id="typee" name="levelName" value={studentCollection.levelName} >
          <option value="" selected></option>
          {levSec.map((card, key) => (
          <option key={key} value={card.id}>
          {card.levelName} {card.id}
           </option>
           ))}
        </select>
      </label>
          <br/>
          <label for="type" className='alignForm'>Student Section:
          <select id="typee" name="section" value={studentCollection.section}>
  <option value="" selected></option>
  {levSec.map((card, key) => (
    card.sections.map((section, key2) => (
      <option key={key2} value={section.id}>
        {section.sectionName} {section.id}
        {console.log("sec",{sectionName})}
      </option>
    ))
  ))}
</select>


          </label>

          <br />
        
          
          <input type="submit" className='button colle-btn'></input>
          <input type="submit" value='close' onClick={()=>(window.location.reload())} className='button colle-btn'></input>
          <br />
        </form>)}
        

        {editStudent &&(
        <form className='second-formm' id='second-formm'>
          <br />
          <legend className='legendd' id='update-btn'>Update Student Info</legend>
          <br />

          <label className='alignForm'>Enter student first name:<input type='text' name="firstName" required></input></label>
          <br />
          <label className='alignForm'>Enter student last name <input type='text' name="lastName"  required></input></label>
          <br />
          <label className='alignForm'>Enter student Email <input type='email' name="email"  required></input></label>
          <br />
          <label className='alignForm'>Enter student password <input type='text' name="password"  required></input></label>
          <br />
          <label className='alignForm'>Enter student phone number <input type='text' name="phoneNumber"  required></input></label>
          <br />
          <label for="type" className='alignForm'>Choose Student Class:
          <br />
          <select id="typee" name="levelName" className='alignForm'>
            <option selected></option>
            <option value="art" >Grade 1</option>
            <option value="sport">Grade 2</option>
            <option value="photography">Grade 3</option>
            <option value="pattern">Grade 4</option>
          </select>
          </label>
          <br/>
          <label for="type" className='alignForm'>Choose Student Section:
          <select id="typee" name="sectionName">
            <option selected></option>
            <option value="art" >A</option>
            <option value="sport">B</option>
            <option value="photography">C</option>
            <option value="pattern">D</option>
          </select>
          </label>
          <br />
          
          <input type="submit" className='button colle-btn'></input>
          <input type="submit" value='close' onClick={()=>(window.location.reload())} className='button colle-btn'></input>
          <br />
          
        </form>
        )}

          </div>
            
    
    
              </div>
          
        </>
      )
    
}

export default StudentSuperAdmin;