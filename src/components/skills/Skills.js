import React from "react";
import "./Skills.scss";
import {
  FaReact,
  FaJs,
  FaDatabase,
  FaNode,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = ({ menuOpen }) => {
  return (
    <div className={"skills " + (menuOpen && "active")} id="skills">
      <h2>Skills</h2>
      <div className="skill">
        {/* image first section */}
        <div className="firstImgSection">
          <div className="img">
            <div className="icon">
              <FaReact />
              <span>React</span>
            </div>
          </div>
          <div className="img">
            <div className="icon" style={{ color: "orange" }}>
              <FaJs />
              <span>JavaScript</span>
            </div>
          </div>
          <div className="img">
            <div className="icon" style={{ color: "green" }}>
              <FaNode />
              <span>Nodejs</span>
            </div>
          </div>
          <div className="img">
            <div className="icon" style={{ color: "green" }}>
              <FaDatabase />
              <span>Mongodb</span>
            </div>
          </div>
          <div className="img">
            <div className="icon" style={{ color: "purple" }}>
              <FaBootstrap />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

        {/* image second section */}
        <div className="secondImgSection">
          <div className="img">
            <div className="icon" style={{ color: "orange" }}>
              <FaHtml5 />
              <span>HTML</span>
            </div>
          </div>
          <div className="img">
            <div className="icon" style={{ color: "purple" }}>
              <FaCss3Alt />
              <span>CSS</span>
            </div>
          </div>
          <div className="img">
            <div className="icon" style={{ color: "blue" }}>
              <FaSass />
              <span>Sass</span>
            </div>
          </div>
          <div className="img">
            <div className="icon" style={{ color: "green" }}>
              <FaGithub />
              <span>Github</span>
            </div>
          </div>
          <div className="img">
            <div className="icon" style={{ color: "purple" }}>
              <SiTailwindcss />
              <span>Tailwindcss</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
