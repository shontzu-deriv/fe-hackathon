// import React from "react";
// import "./services.css";

// const Service = () => {
//   return (
//     <section className="serviceslandingpage">
//       <div className="serviceslandingpage-overlay">
//         <h2>The leader in interactive VR</h2>

//         <p>
//           Founded in 2011, Loopstudios has been producing world-class virtual
//           reality projects for some of the best companies around the globe. Our
//           award-winning creations have transformed businesses through digital
//           experiences that bind to their brand.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Service;
import React from "react";
import "./services.css";

const Service = () => {
  return (
    <section className="section-b">
      <div className="about">
        <div className="spec ">
          <h3>About Us</h3>
          <div className="ser-t">
            <b></b>
            <i></i>
            <b className="line"></b>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="overlay" data-aos="slide-up">
        <div className="section-b-inner py-5">
          <h2 className="text-5 mt-1">Harry Potter Almanac</h2>

          <p className="mt-1">
            Your character has finally arrived! What kind of witch or wizard
            will you be? A heroic Gryffindor? A cunning Slytherin? A clever
            Ravenclaw? A loyal Hufflepuff? YOU decide! With countless choices,
            you will be able to carve out your own unique path in Harry Potter:
            Hogwarts Mystery. This is YOUR Hogwarts journey. Whether you are
            mastering powerful character with Dumbledore, brewing potions with
            Snape, discovering favourite character at Hogwarts, forging
            alliances with new friends, or duelling your rivals, there is always
            something new to explore!
          </p>
          <br />
          <br />
          <br />
          <div class="button">JOIN US NOW</div>
        </div>
      </div>
    </section>
  );
};

export default Service;
