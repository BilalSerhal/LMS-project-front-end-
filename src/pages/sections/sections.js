import React from 'react'
import "./sections.css";
import delet from "./image/icons8-trash-can-30.png";
import search from "./image/icons8-search-50.png";
import close from "./image/icons8-close-window-48.png";
import edit from "./image/icons8-pencil-64.png";
import add from "./image/icons8-add-new-64.png";

const sections = () => {

  const cards = [
    {
      id: 1,
      sectionName :"A"
    },
    {
      id: 2,
      sectionName :"B"
    },
    {
      id: 3,
      sectionName :"C"
    },
    {
      id: 4,
      sectionName :"D"
    },
  ] 

  return (
    <div className="section-body">
    <h2 className="section-headline">Sections</h2>
    <div className="head-div">
      <h2 className="section-headline">Add Section</h2>
      <div>
        <button id="add" className="section-button">
          <img src={add} alt="" className="section-image" />
        </button>
      </div>
    </div>
     <div className="class-section">
        <table className="class-table">
          <thead>
          <tr className="class-tr">
            <th className="class-th nameR">class</th>
            <th className="class-th">Edit</th>
            <th className="class-th">Delete</th>
          </tr>
          </thead>
          {cards.map((card) =>(
          <tbody key={card.id} >
          <tr className="class-tr row row1">
            <td className="class-td name1">{card.sectionName}</td>
            
            <td className="class-td icon">
              <button className="class-button" >
                <img src={edit} className='class-image'alt="" />
              </button>
            </td>
            <td className="class-td icon">
              <button className="class-button" >
                <img src={delet} alt="" className='class-image'/>
              </button>
            </td>
          </tr>
          </tbody>
          ))}
       </table>
       </div>
       </div>
  )
}

export default sections
