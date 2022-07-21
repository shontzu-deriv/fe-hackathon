import { Link } from "react-router-dom";
import "./index.css";
import Shontzula from "../Images/shontzu.jpeg";
const AboutUsIndex = () => {
  return (
    <section className="main_wrapper_faq">
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h2>01</h2>
              <img className="people" src={Shontzula} alt="image" />
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
              <img className="people" src="" />
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
              <img className="people" src="" />
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
