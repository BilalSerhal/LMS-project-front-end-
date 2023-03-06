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
    <h1 className="section-headline">Sections</h1>
    <div className="head-div">
      <h2 className="section-headline1">Add Section</h2>
      <div>
        <button id="add" className="section-button">
          <img src={add} alt="" className="section-image" />
        </button>
      </div>
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
          {cards.map((card) =>(
          <tbody key={card.id} >
          <tr className="section-tr row row1">
            <td className="section-td nameR1">{card.sectionName}</td>
            
            <td className="section-td icon">
              <button className="section-button" >
                <img src={edit} className='class-image'alt="" />
              </button>
            </td>
            <td className="section-td icon">
              <button className="section-button" >
                <img src={delet} alt="" className='section-image'/>
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
