import './StudentSuperAdmin.css';
import './images/student.png'
import student from "./images/student.png"
function StudentSuperAdmin(){

    const data=[{
        firstName:"Rasha",
        lastName:"Badran",
        email:"badran@gmail.com",
        phoneNumber:'012332',
        levelName:'Grade1',
        sectionName:'A'
        
    },
    {
        firstName:"Rasha",
        lastName:"Badran",
        email:"badran@gmail.com",
        phoneNumber:'012332',
        levelName:'Grade1',
        sectionName:'A'
    },
    {
        firstName:"Rasha",
        lastName:"Badran",
        email:"badran@gmail.com",
        phoneNumber:'012332',
        levelName:'Grade1',
        sectionName:'A'
    },
    {
      firstName:"Rasha",
      lastName:"Badran",
      email:"badran@gmail.com",
      phoneNumber:'012332',
      levelName:'Grade1',
      sectionName:'A'
  },
  {
    firstName:"Rasha",
    lastName:"Badran",
    email:"badran@gmail.com",
    phoneNumber:'012332',
    levelName:'Grade1',
    sectionName:'A'
},
{
  firstName:"Rasha",
  lastName:"Badran",
  email:"badran@gmail.com",
  phoneNumber:'012332',
  levelName:'Grade1',
  sectionName:'A'
}
]

    return (
        <>
          
           <div>
           <button className='button  coll-btn' onClick={() => {
                          let form = document.getElementById("firstt-formm");
                          form && window.scrollTo({ top: form.offsetTop, behavior: "smooth" });
                          }}>Add</button>
         
    
              <div className='mappingdata'>
           
              
                {data.map((item, index) => {
    
                  return (
    
                    <div key={index}>
                      

                      <div className='infopart'>
                      <img className="student-img" src={student} alt="img" />
                    <br />
                        First Name:
                        {item.firstName}
                        <br/>
                        <br/>
                        Last Name:
                        {item.lastName}
                        <br/>
                        <br/>
                        Email:
                        {item.email}
                        
                        <br/>
                        <br/>
                        Phone Number:
                        {item.phoneNumber}
                        <br/>
                        <br/>
                        Level::
                        {item.levelName}
                        <br/>
                        <br/>
                        Section:
                        {item.sectionName}
                        <br/>
                        <br/>
                        <button className='button collection-button' onClick={() => {
                          let form = document.getElementById("second-formm");
                          form && window.scrollTo({ top: form.offsetTop, behavior: "smooth" });
                          }}>Update</button>
                        <button className=' button collection-button' >Delete</button>
    
                      </div>
    
                    </div>
                  )
                })}
              </div>
    
          <div  className='formm' >
          <form className='firstt-formm' id='firstt-formm'>
          <br />
          <legend className='legendd'>Add Student Info</legend>
          <br />

          <label >Enter student first name:<br /><input type='text' name="firstName" required></input></label>
          <br />
          <label >Enter student last name <br /><input type='text' name="lastName"  required></input></label>
          <br />
          <label>Enter student Email <br /><input type='email' name="email"  required></input></label>
          <br />
          <label>Enter student password <br /><input type='text' name="password"  required></input></label>
          <br />
          <label>Enter student phone number <br /><input type='text' name="phoneNumber"  required></input></label>
          <br />
          <label for="type">Choose Student Class:</label>
          <br />
          <select id="typee" name="levelName">
            <option selected></option>
            <option value="art" >Grade 1</option>
            <option value="sport">Grade 2</option>
            <option value="photography">Grade 3</option>
            <option value="pattern">Grade 4</option>
          </select>
          <br/>
          <label for="type">Choose Student Section:</label>
          <select id="typee" name="sectionName">
            <option selected></option>
            <option value="art" >A</option>
            <option value="sport">B</option>
            <option value="photography">C</option>
            <option value="pattern">D</option>
          </select>
          <br />
          <br />
          <input type="submit" className='button colle-btn'></input>
          <br />
        </form>



        <form className='second-formm' id='second-formm'>
          <br />
          <legend className='legendd'>Update Student Info</legend>
          <br />

          <label >Enter student first name:<br /><input type='text' name="firstName" required></input></label>
          <br />
          <label >Enter student last name <br /><input type='text' name="lastName"  required></input></label>
          <br />
          <label>Enter student Email <br /><input type='email' name="email"  required></input></label>
          <br />
          <label>Enter student password <br /><input type='text' name="password"  required></input></label>
          <br />
          <label>Enter student phone number <br /><input type='text' name="phoneNumber"  required></input></label>
          <br />
          <label for="type">Choose Student Class:</label>
          <br />
          <select id="typee" name="levelName">
            <option selected></option>
            <option value="art" >Grade 1</option>
            <option value="sport">Grade 2</option>
            <option value="photography">Grade 3</option>
            <option value="pattern">Grade 4</option>
          </select>
          <br/>
          <label for="type">Choose Student Section:</label>
          <select id="typee" name="sectionName">
            <option selected></option>
            <option value="art" >A</option>
            <option value="sport">B</option>
            <option value="photography">C</option>
            <option value="pattern">D</option>
          </select>
          <br />
          <br />
          <input type="submit" className='button colle-btn'></input>
          <br />
        </form>

          </div>
            
    
    
              </div>
          
        </>
      )
    
}

export default StudentSuperAdmin;