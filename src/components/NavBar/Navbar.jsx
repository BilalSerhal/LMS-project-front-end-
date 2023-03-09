import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import attendance from './image/attendance.png';
import classroom from './image/classroom.png';
import monitor from './image/monitor.png';
import power from './image/power.png';
import presentation from './image/presentation.png';
import section from './image/sections.png';
import course from './image/courses.png';
import menu from "./image/Menu.png";

const Navbar = ({ setMenuBar, menubar }) => {
return (
    <div className='container'>
        <div className='navbar-container'>
        <div className='navbar'>
            
        <div className='dashboard_main'>
            <div className='dashboard'>
            <img  className='img_dashboard' src={monitor}alt=''/>
            <div className='text'><Link to="/">Dashboard</Link></div>
            </div>
           
        </div>
        <div className='dashboard_main'>
          <div className='dashboard'>
            <img className='img_dashboard' src={presentation} alt=''/>
            <div className='text'><Link to="/teachers">Teachers</Link></div>
        </div>
        </div>
        <div className='dashboard_main'>
          <div className='dashboard'>
            <img className='img_dashboard' src={presentation} alt=''/>
            <div className='text'><Link to="/teachers">Students</Link></div>
        </div>
        </div>
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src={classroom} alt=''/>
            <div className='text'><Link to="/levels">Classes</Link></div>
            </div>
        </div>
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src={section} alt=''/>
            <div className='text'><Link to="/sections">Sections</Link></div>
            </div>
        </div>
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src={course} alt=''/>
            <div className='text'><Link to="/courses">Courses</Link></div>
            </div>
        </div>
        <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src={attendance} alt=''/>
            <div className='text'><Link to="/attendence">Attendances</Link></div>
            </div>
        </div>
    </div>
    <div className='dashboard_main'>
        <div className='dashboard'>
            <img className='img_dashboard' src={power} alt=''/>
            <div className='text'><Link to="/">Log out</Link></div>
            </div>
        </div>
        </div>
              <div className="navnavbar-menu">
					<button className="navmenu-button" id="navmenuButton">
						<img src={menu} alt="menu" className="navmenu" onClick={() => setMenuBar(!menubar)}/>
					</button>
				</div>
 </div>
);
};

const MenuBar = ({ menubar }) => {
	return (
		<div className={!menubar ? "navhidden_hidden" : "navhidden_show"} menubar>
			<button className="navmenu-menu">
				<Link to="/">Dashboard</Link>
			</button>
			<button className="navmenu-menu">
				<Link to="/">Teachers</Link>
			</button>
            <button className="navmenu-menu">
				<Link to="/">Students</Link>
			</button>
			<button className="navmenu-menu">
				<Link to="/levels">Classes</Link>
			</button>
			<button className="navmenu-menu">
				<Link to="/sections">Sections</Link>
			</button>
			<button className="navmenu-menu">
				<Link to="/contact">Courses</Link>
			</button>
		</div>
	);
};
export { Navbar, MenuBar };