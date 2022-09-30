import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <div className="icon">
          <FontAwesomeIcon icon="faDumbbell"></FontAwesomeIcon>
          <h2 className="text">Home Workout Session</h2>
        </div>
      </nav>
    </div>
  );
};

export default Header;
