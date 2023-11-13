import React from "react";
import MovingText from "react-moving-text";
import Aboutlink from "./Aboutlink";
import Link from "@mui/material/Link";

function About() {
  const [counter, setCounter] = React.useState(1);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <div>
      <MovingText
        type="slideInFromLeft"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <h3 className="about-header">About Me</h3>
      </MovingText>
      <MovingText
        type="slideInFromBottom"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <div className="about">
           <p className="about-content"> Hello everybody ! My name is {""}<span className="high-light">Imtiazaki Darmawan</span>, and I am a <span className="high-light">Web
            Developer</span> currently focusing on <span className="high-light">JavaScript languages</span> such as
            ReactJS, NextJs, VueJs, and others. I created a couple projects with
            ReactJs as the frontend and PostgreSQL or MySQL as the backend
            databases. </p>
            <p className="about-content">Just like the universe, my programming skills are
            inevitable expanding. I'm really excited to work on and learn about
            other programming languages to improve my skills and knowledge.
          </p>
        </div>
      </MovingText>
      <div className="about-contact">
        {counter < 1 ? (
          <MovingText
            type="fadeInFromBottom"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <Aboutlink />
          </MovingText>
        ) : null}
      </div>
    </div>
  );
}

export default About;
