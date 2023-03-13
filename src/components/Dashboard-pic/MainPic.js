import React from "react";
import "./MainPic.css";
import mainPic from "./image/mainPic.jpg";
import Header from "../../components/Header/Header";
import { Navbar, MenuBar } from "../../components/NavBar/Navbar";
import { useEffect, useState } from "react";

const MainPic = () => {
  const [menubar, setMenuBar] = useState(false);

  return (
    <>
      <div>
        <Header />
        <div className="app-body">
          <Navbar setMenuBar={setMenuBar} menubar={menubar} />
          <MenuBar menubar={menubar} />
          <div className="picture">
            <div>
              <img src={mainPic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPic;
