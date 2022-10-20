import React from "react";
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCode,
  faGraduationCap,
  faHome,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";

function Nav() {

  return (
    <nav>
      <div className="nav">
        <NavLink to="/" end>
          <FontAwesomeIcon className="icons" icon={faHome} />
        </NavLink>
        <NavLink to="/about" className="icon-bg">
          <FontAwesomeIcon className="icons" icon={faUser} />
        </NavLink>
        <NavLink to="/contact">
          <FontAwesomeIcon className="icons" icon={faAddressBook} />
        </NavLink>
        <NavLink to="/projects">
          <FontAwesomeIcon className="icons" icon={faCode} />
        </NavLink>
        <NavLink to="/skills" className="icon-bg">
          <FontAwesomeIcon className="icons" icon={faTools} />
        </NavLink>
        <NavLink to="/resume" className="icon-bg">
          <FontAwesomeIcon className="icons" icon={faGraduationCap} />
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
