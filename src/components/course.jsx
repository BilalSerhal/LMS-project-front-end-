import { Button, Card, CardActions, CardContent, Typography,Container, Grid, Modal, TextField} from "@mui/material";
import { Delete  } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";






function Course() {

  const [course, setCourse] = useState([]);
  const [subject, setSubject] = useState("");
  const [showModal,setShowModal] = useState(false);



  const CourseFetch = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/course");
      const data = await response.data;
      console.log(data);
      setCourse(data);
    } catch (err) {
      console.log(err);
    }

  };


  const courseDelete = async (id) => {
    try{
      const response = await axios.delete(`http://localhost:8000/api/course/${id}`);
      setCourse(response.data);
    }
    catch(error){
      console.log("error ",error)
    }
    
  };



  const coursePost = async () => {
    try{
      const response = await axios.post('http://localhost:8000/api/course',{subject});
      if(response.statusText == "Created") {
        const newCourse = [...course,subject];
        setCourse(newCourse);
        setShowModal(false);
      };
      
    }
    catch(error){
      console.log("error ",error)
    }
    
  };


    const submitHandler=(e) => {
      e.preventDefault();
      coursePost();
    };

  useEffect(() => {
    CourseFetch();
  }, [course.length]); // this is the dependency array



 

  return (
      
    <div>
      
    <Container>
    <Button onClick={e => setShowModal(true)} sx={{backgroundColor: '#2599BD' }}variant="contained" disableElevation>
    Add Course
</Button>


      <Grid container spacing={3} style={{ marginTop: "120px" }}>
        {course && course.map((item, index) => {

        return (
          <Grid item xs={12} md={12} lg={4} key={course.id}>

<Card key={index} sx={{ maxWidth: 300, backgroundColor: '#2599BD', border: '1px solid #ccc', padding: '16px' }}>



              <CardContent>
                <Typography  sx={{ color: 'white' }} gutterBottom variant="h5" component="div">
                  {item.subject}
                </Typography>
                <Typography  sx={{ color: 'white' }} variant="body2" color="text.secondary">
                  Tap to enter course details
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button sx={{ color: 'white' }} size="small">Edit</Button> */}
                <Button  variant="outlined" startIcon={<Delete />} sx={{ color: 'white' }} size="small" value={item.id} onClick={(event) => courseDelete(event.target.value)}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>)
        })}
      </Grid>
    </Container>

    <Modal
  open={showModal}
  onClose={() => {
    setShowModal(false);
  }}
  style={{
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
  }}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
<form style={{backgroundColor : "white",width : "45%",height : "30%", minHeight : 300, display : "flex",justifyContent : "center", alignItems : "center",gap : 20,borderRadius : 10 , flexDirection:"column" ,textAlign:"center"}} id="post-form">

<div className="placeholder">
  <TextField
  helperText="Please enter Course Name "
  id="demo-helper-text-misaligned"
  label="Subject"
  onChange={(e)=>setSubject(e.target.value)}/>
  </div>
  <div className="form-btns" style={{display :"flex", flexDirection:"row" , justifyContent:"space-between" , width:"30%"}}>
  <Button  variant="outlined" onClick={submitHandler}  margin={5} >Submit</Button>  
  <Button variant="outlined"   onClick={(e) => {
    e.preventDefault();
    setShowModal(false);
  }}  >Cancel</Button>
  </div>
</form>
</Modal>   
    </div>

// className="form-btns" style={{display :"flex", flexDirection:"column" , justifyContent:"space-between" }}
  );
}

  

export default Course;


