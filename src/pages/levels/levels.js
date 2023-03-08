import React, { useState, useEffect, useRef } from 'react';

import "./levels.css";
import delet from "./image/icons8-trash-can-30.png";
import search from "./image/icons8-search-50.png";
import close from "./image/icons8-close-window-48.png";
import edit from "./image/icons8-pencil-64.png";
import add from "./image/icons8-add-new-64.png";

import axios from "axios";
  

const Levels = () => {
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const url = `http://localhost:8000/api/levels`;
 
  const [formData, setFormData] = useState({
    levelName: "",
     });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const form = useRef();
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

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this item?");
    if (!confirm) {
      return;
    }
    try {
      await axios.delete(`${url}/${id}`);
      setData(data.filter((card) => card._id !== id));
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error(error);
    }
  };
 
 
  const handleEditItem = async (id) => {
    try {
      const response = await axios.get(`${url}/${id}`);
      const levelName = response.data.levelName;
      setFormData({ levelName });
      setId(id);
      setEditMode(true);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  const handleAdd = () => {
    setAddMode(!addMode);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${url}/${id}`, formData);
      setEditMode(false);
      setId("");
      setFormData({ levelName: "" });
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <div className="class-body">
        <h2 className="class-headline">Classes</h2>
        <div className="head-div">
          <h2 className="class-headline1">Add Class</h2>
          <div>
            <button  className="class-button" onClick={handleAdd} >
              <img src={add} alt="" className="class-image" />
            </button>
          </div>
        </div>
        <div className='class-form'>
          {/* <form ref={form} >
          <input className='class-input' type='text'placeholder='Class Name'/>
          </form> */}
           {editMode && (
          <form onSubmit={handleUpdate} ref={form} >
          <input className='class-input' type='text' placeholder='Class Name' name="levelName" value={formData.levelName}
                onChange={handleChange}></input>
                <button type="submit" className="class-buttonR">
                  SAVE
                </button>
          </form>   
           )}
        </div> 
        <div className="class-section" >
          <table className="class-table">
            <thead>
              <tr className="class-tr">
                <th className="class-th name">Class</th>
                <th className="class-th">Edit</th>
                <th className="class-th">Delete</th>
                <th
                  className="class-th name2"
                  colSpan={data.reduce(
                    (acc, card) => acc + card.sections.length,
                    1
                    )}
                    >
                  Section
                </th>
              </tr>
            </thead>
            {data.map((card) => (
              <tbody key={card.id}>
                <tr className="class-tr row row1">
                  <td className="class-td name1" rowSpan={card.sections.length}>
                    {card.levelName}
                  </td>
                  <td className="class-td icon">
                    <button className="class-button" onClick={() => handleEditItem(card.id)} >
                      <img src={edit} className="class-image" alt=""  />
                    </button>
                  </td>
                  <td className="class-td icon">
                    <button className="class-button">
                      <img src={delet} alt="" className="class-image" onClick={() => handleDelete(card.id)}/>
                    </button>
                  </td>
                  {card.sections.map((section, index) => (
                    <React.Fragment key={section.id}>
                      {index > 0 && <tr className="class-tr row row1" />}
                      <td className="class-td name1">{section.sectionName}</td>
                    </React.Fragment>
                  ))}
                </tr>
              </tbody>
            ))}
          </table>
        </div>
       
      </div>
    </>
  );
};

export default Levels;

