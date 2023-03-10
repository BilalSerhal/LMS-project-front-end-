 import './TeacherSuperAdmin.css';
import './images/student.png'
import teacher from "./images/teacher.png"
function TeacherSuperAdmin(){

    const data=[{
        firstName:"Rasha",
        lastName:"Badran",
        email:"badran@gmail.com",
        phoneNumber:'012332',
        levelName:'Grade1',
        sectionName:'A',
        subject:'English'
        
    },
    {
        firstName:"Rasha",
        lastName:"Badran",
        email:"badran@gmail.com",
        phoneNumber:'012332',
        levelName:'Grade1',
        sectionName:'A',
        subject:'English'
    },
    {
        firstName:"Rasha",
        lastName:"Badran",
        email:"badran@gmail.com",
        phoneNumber:'012332',
        levelName:'Grade1',
        sectionName:'A',
        subject:'English'
    },
    {
      firstName:"Rasha",
      lastName:"Badran",
      email:"badran@gmail.com",
      phoneNumber:'012332',
      levelName:'Grade1',
      sectionName:'A',
      subject:'English'
  },
  {
    firstName:"Rasha",
    lastName:"Badran",
    email:"badran@gmail.com",
    phoneNumber:'012332',
    levelName:'Grade1',
    sectionName:'A',
    subject:'English'
},
{
  firstName:"Rasha",
  lastName:"Badran",
  email:"badran@gmail.com",
  phoneNumber:'012332',
  levelName:'Grade1',
  sectionName:'A',
  subject:'English'
}
]

    return (
        <>
          
           <div>
           <button className='button  coll-btn' onClick={() => {
                          let form = document.getElementById("firstt-formms");
                          form && window.scrollTo({ top: form.offsetTop, behavior: "smooth" });
                          }}>Add</button>
         
    
              <div className='mappingdatas'>
           
              
                {data.map((item, index) => {
    
                  return (
    
                    <div key={index}>
                      

                      <div className='infoparts'>
                      <img className="teacher-img" src={teacher} alt="img" />
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
                        Subject:
                        {item.subject}
                        <br/>
                        <br/>
                        <button className='button collection-button' onClick={() => {
                          let form = document.getElementById("second-formms");
                          form && window.scrollTo({ top: form.offsetTop, behavior: "smooth" });
                          }}>Update</button>
                          <br/> 
                        <button className=' button collection-buttons' >Delete</button>
    
                      </div>
    
                    </div>
                  )
                })}
              </div>
    
          <div  className='formms' >
          <form className='firstt-formms' id='firstt-formms'>
          <br />
          <legend className='legendds'>Add Student Info</legend>
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
          <label for="type">Choose subjct the teacher teach:</label>
          <select id="typee" name="subject">
            <option selected></option>
            <option value="art" >English</option>
            <option value="sport">Arabic</option>
            <option value="photography">Math</option>
            <option value="pattern">Science</option>
          </select>
          <br/>
          <input type="submit" className='button colle-btn'></input>
          <br />
        </form>



        <form className='second-formms' id='second-formms'>
          <br />
          <legend className='legendd'>Update Student Info</legend>
          <br />

          <label >Enter teacher first name:<br /><input type='text' name="firstName" required></input></label>
          <br />
          <label >Enter teacher last name <br /><input type='text' name="lastName"  required></input></label>
          <br />
          <label>Enter teacher Email <br /><input type='email' name="email"  required></input></label>
          <br />
          <label>Enter teacher password <br /><input type='text' name="password"  required></input></label>
          <br />
          <label>Enter teacher phone number <br /><input type='text' name="phoneNumber"  required></input></label>
          <br />
          <label for="type">Choose Teacher Class:</label>
          <br />
          <select id="typee" name="levelName">
            <option selected></option>
            <option value="art" >Grade 1</option>
            <option value="sport">Grade 2</option>
            <option value="photography">Grade 3</option>
            <option value="pattern">Grade 4</option>
          </select>
          <br/>
          <label for="type">Choose Teacher Section:</label>
          <select id="typee" name="sectionName">
            <option selected></option>
            <option value="art" >A</option>
            <option value="sport">B</option>
            <option value="photography">C</option>
            <option value="pattern">D</option>
          </select>
          <br />
          <br />
          <label for="type">Choose subjct the teacher teach:</label>
          <select id="typee" name="subject">
            <option selected></option>
            <option value="art" >English</option>
            <option value="sport">Arabic</option>
            <option value="photography">Math</option>
            <option value="pattern">Science</option>
          </select>
          <br />
          <input type="submit" className='button colle-btn'></input>
          <br />
        </form>

          </div>
            
    
    
              </div>
          
        </>
      )
    
}

export default TeacherSuperAdmin;