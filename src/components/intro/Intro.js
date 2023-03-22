import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";

const Intro = () => {
  const stopRef = useRef(false);
  const textRef = useRef();
  useEffect(() => {
    if (stopRef.current === false) {
      init(textRef.current, {
        typeSpeed: 150,
        backDelay: 2000,
        showCursor: true,
        strings: ["Developer", "Designer"],
      });
    }

    return () => {
      stopRef.current = true;
    };
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Gyanu Sherchan</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
