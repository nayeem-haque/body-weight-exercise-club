import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <div className="icon">
        <i class="fa-thin fa-dumbbell"></i>
          <div className="flex">
          <h2 className="text">Bodyweight Exercise</h2> <br />
          <h4 className="paragraph" > Select Today's Exercise</h4>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
