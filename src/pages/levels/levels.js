import React from "react";
import "./levels.css";
import delet from "./image/icons8-trash-can-30.png";
import search from "./image/icons8-search-50.png";
import close from "./image/icons8-close-window-48.png";
import edit from "./image/icons8-pencil-64.png";
import add from "./image/icons8-add-new-64.png";

const levels = () => {
  const cards = [
    {
      id: 1,
      levelName: "grade 1",
      sections: [
        {
          id: 1,
          sectionName: "A",
        },
        {
          id: 2,
          sectionName: "B",
        },
        {
          id: 3,
          sectionName: "C",
        },
      ],
    },
    {
      id: 2,
      levelName: "grade 2",
      sections: [
        {
          id: 1,
          sectionName: "A",
        },
        {
          id: 2,
          sectionName: "B",
        },
      ],
    },
    {
      id: 3,
      levelName: "grade 3",
      sections: [
        {
          id: 1,
          sectionName: "A",
        },

      ],
    },
    {
      id: 4,
      levelName: "grade 4",
      sections: [
        {
          id: 2,
          sectionName: "B",
        },
        {
          id: 4,
          sectionName: "D",
        },
       
      ],
    },
  ];

  return (
    <>
      <div className="class-body">
        <h2 className="class-headline">Classes</h2>
        <div className="head-div">
          <h2 className="class-headline1">Add Class</h2>
          <div>
            <button id="add" className="class-button">
              <img src={add} alt="" className="class-image" />
            </button>
          </div>
        </div>

        <div className="class-section">
          <table className="class-table">
            <thead>
              <tr className="class-tr">
                <th className="class-th name">class</th>
                <th className="class-th">Edit</th>
                <th className="class-th">Delete</th>
                <th
                  className="class-th name"
                  colSpan={cards.reduce(
                    (acc, card) => acc + card.sections.length,
                    1
                  )}
                >
                  section
                </th>
              </tr>
            </thead>
            {cards.map((card) => (
              <tbody key={card.id}>
                <tr className="class-tr row row1">
                  <td className="class-td name1" rowSpan={card.sections.length}>
                    {card.levelName}
                  </td>
                  <td className="class-td icon">
                    <button className="class-button">
                      <img src={edit} className="class-image" alt="" />
                    </button>
                  </td>
                  <td className="class-td icon">
                    <button className="class-button">
                      <img src={delet} alt="" className="class-image" />
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

export default levels;
