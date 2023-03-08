import React, { useState, useEffect, useRef } from "react";
import "./sections.css";
import delet from "./image/icons8-trash-can-30.png";
import search from "./image/icons8-search-50.png";
import close from "./image/icons8-close-window-48.png";
import edit from "./image/icons8-pencil-64.png";
import add from "./image/icons8-add-new-64.png";
import axios from "axios";

const Sections = () => {
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const url = `http://localhost:8000/api/sections`;

  const [formData, setFormData] = useState({
    sectionName: "",
     });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const form = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/sections`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
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
      const sectionName = response.data.sectionName;
      setFormData({ sectionName });
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
      setFormData({ sectionName: "" });
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="section-body">
      <h1 className="section-headline">Sections</h1>
      <div className="head-div">
        <h2 className="section-headline1">Add Section</h2>
        <div>
          <button id="add" className="section-button" onClick={handleAdd}>
            <img src={add} alt="" className="section-image" />
          </button>
        </div>
      </div>
      <div className='section-form'>
          {/* <form ref={form} >
          <input className='class-input' type='text'placeholder='Class Name'/>
          </form> */}
           {editMode && (
          <form onSubmit={handleUpdate} ref={form} >
          <input className='section-input' type='text' placeholder='Class Name' name="sectionName" value={formData.sectionName}
                onChange={handleChange}></input>
                <button type="submit" className="section-buttonR">
                  SAVE
                </button>
          </form>   
           )}
        </div> 
      <div className="section-section">
        <table className="section-table">
          <thead>
            <tr className="section-tr">
              <th className="section-th nameR">Section</th>
              <th className="section-th">Edit</th>
              <th className="section-th">Delete</th>
            </tr>
          </thead>
          {data.map((card) => (
            <tbody key={card.id}>
              <tr className="section-tr row row1">
                <td className="section-td nameR1">{card.sectionName}</td>

                <td className="section-td icon">
                  <button className="section-button" onClick={() => handleEditItem(card.id)} >
                    <img src={edit} className="class-image" alt="" />
                  </button>
                </td>
                <td className="section-td icon">
                  <button className="section-button">
                    <img
                      src={delet}
                      alt=""
                      className="section-image"
                      onClick={() => handleDelete(card.id)}
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Sections;

// const cards = [
//   {
//     id: 1,
//     sectionName :"A"
//   },
//   {
//     id: 2,
//     sectionName :"B"
//   },
//   {
//     id: 3,
//     sectionName :"C"
//   },
//   {
//     id: 4,
//     sectionName :"D"
//   },
// ]
