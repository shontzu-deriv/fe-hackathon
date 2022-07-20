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
import "bootstrap/dist/css/bootstrap.css";

const Service = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="spec ">
          <h3>About</h3>
          <div className="ser-t">
            <b></b>
            <span>
              <i></i>
            </span>
            <b className="line"></b>
          </div>
        </div>

        <div className="col-md-4 about-right">
          <img className="img-responsive" src="../src/Images/hp5.jpeg" alt="" />
        </div>
        <div className="col-md-4 about-left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            laoreet sem sit amet dolor luctus pellentesque. Pellentesque
            eleifend tellus at interdum elementum. Nam egestas molestie elit.
            Vivamus sed accumsan quam, a mollis magna. Nam aliquet eros eget
            sapien consequat tincidunt at vel nibh. Duis ut turpis mi. Duis nec
            scelerisque urna, sit amet varius arcu. Aliquam aliquet sapien quis
            mauris semper suscipit. Maecenas pharetra dapibus posuere. Praesent
            odio sem.
          </p>
        </div>
        <div className="col-md-4 about-right">
          <img className="img-responsive" src="../src/Images/hp5.jpeg" alt="" />
        </div>

        <div className="clearfix"> </div>
      </div>
    </div>
  );
};

export default Service;
