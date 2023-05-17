import React from "react";
import "./TopBar.scss";
import { Mail } from "@mui/icons-material";

const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topBar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Gyanu.
          </a>
          {/* <div className="itemContainer">
            <Person className="icon" />
            <span>+61420792223</span>
          </div> */}
          <div className="itemContainer">
            <Mail className="icon" />
            <span>gyanusherchan@outlook.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
