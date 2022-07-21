import { Link } from "react-router-dom";
import "./index.css";
import shontzula from "../../Images/shontzu.jpeg";
import izzatyla from "../../Images/izzaty.jpeg";
import derrickla from "../../Images/derrick.jpeg";

const AboutUsIndex = () => {
  return (
    <section className="main_wrapper_faq">
      <div className="bodyy">
        <h1>
          <span>MEET</span>OUR<span>TEAM</span>
        </h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h2>01</h2>
              <img className="people" src={shontzula} alt="image" />
              <h3>Shontzu</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <Link to="">Programmer</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h2>02</h2>
              <img className="people" src={derrickla} alt="image" />
              <h3>Derrick</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <Link to="">Designer</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h2>03</h2>
              <img className="people" src={izzatyla} alt="image" />
              <h3>Izzaty</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <Link to="">Programmer</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIndex;
