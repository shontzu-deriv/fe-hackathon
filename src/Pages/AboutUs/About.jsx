import React from "react";
import Animatd from "./animation.jsx";
import "./index.jsx";
import AboutUsIndex from "./index.jsx";
import Review from "./section2.jsx";

const About = () => {
  return (
    <section>
      <AboutUsIndex />
      <Review />

      <br></br>
      <Animatd />
    </section>
  );
};

export default About;
