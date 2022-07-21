import React from "react";
import Showcase from "../Components/title";
import Service from "../Components/Service";
import Offers from "../Components/Offers";
import Brand from "../Components/Brand";

const Home = () => {
  return (
    <section>
      <Showcase />
      <Brand />
      <Service />

      <br></br>

      <Offers />
    </section>
  );
};

export default Home;
