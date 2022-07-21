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
              <img className="people" src={shontzula} alt="shontzuimage" />
              <h3>Shontzu</h3>
              <p>
                A busy housewife with 5 years of experience hacking the
                husband's laptop.
              </p>
              <Link to="">Programmer</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h2>02</h2>
              <img className="people" src={derrickla} alt="derrickimage" />
              <h3>Derrick</h3>
              <p>Still in progress in experiencing the experience.</p>
              <Link to="">Designer</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h2>03</h2>
              <img className="people" src={izzatyla} alt="izzatyimage" />
              <h3>Izzaty</h3>
              <p>
                2 years experience in unethical hacking with the Talibans and
                participated in hacking the white house system during trump
                election.
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
