import React from "react";
import rh5 from "./Pages/Images/rh.png";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li className="l1">
              <img src={rh5} alt="image" />
            </li>
            <li>
              <NavLink to="/" className="home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects" className="project">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blogs" className="blogs">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="about">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
