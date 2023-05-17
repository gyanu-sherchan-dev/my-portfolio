import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";

const Intro = ({ menuOpen }) => {
  const stopRef = useRef(false);
  const textRef = useRef();
  useEffect(() => {
    if (stopRef.current === false) {
      init(textRef.current, {
        typeSpeed: 150,
        backDelay: 2000,
        showCursor: true,
        strings: ["Web Developer", "MERN Stack Developer"],
      });
    }

    return () => {
      stopRef.current = true;
    };
  }, []);

  return (
    <div className={"intro " + (menuOpen && "active")} id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Gyanu Sherchan</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <div className="intro-btn">
            <a href="#contact">Let's talk</a>
            {/* <button>Hire Me</button> */}
          </div>
          <a href="#portfolio" className="downArrow">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
