import React from "react";
import "./offer.css";

const Offers = () => {
  return (
    <section id="timeline">
      <article>
        <div className="inner">
          <span className="date">
            <span className="day">
              30<sup>th</sup>
            </span>
            <span className="month">Jan</span>
            <span className="year">2014</span>
          </span>
          <h2>First Journay</h2>
          <p>
            Our company has launch a first website that allows every user to
            play and interact with the app as well as able to purchase few
            merchandises of harry potter.
          </p>
        </div>
      </article>
      <article>
        <div className="inner">
          <span className="date">
            <span className="day">
              26<sup>th</sup>
            </span>
            <span className="month">Apr</span>
            <span className="year">2015</span>
          </span>
          <h2>Collaboration Starts</h2>
          <p>
            HarryPotter Almanac starts to collaborates with other companies to
            produce a greater websites togather. Since we starts collaborating
            with other companies we able to explore more about apps.
          </p>
        </div>
      </article>
      <article>
        <div class="inner">
          <span className="date">
            <span className="day">
              24<sup>th</sup>
            </span>
            <span className="month">May</span>
            <span className="year">2016</span>
          </span>
          <h2>Company Expanded</h2>
          <p>
            Our company begin to expand slowly in few states in Malaysia. We
            begin open few branches at Kuala Lumpur, Perak, Penang, Kedah,
            Selangor and Sabah. We begin to gain customers attention.
          </p>
        </div>
      </article>
      <article>
        <div className="inner">
          <span className="date">
            <span className="day">
              20<sup>th</sup>
            </span>
            <span className="month">Jun</span>
            <span className="year">2017</span>
          </span>
          <h2>Employee Expansion</h2>
          <p>
            Harry Potter Almanac able to gain tremendous amount of profit from
            all the collaborations and due to that positive impact, more staff
            can be hired in the company.
          </p>
        </div>
      </article>
      <article>
        <div className="inner">
          <span className="date">
            <span className="day">
              18<sup>th</sup>
            </span>
            <span className="month">Dec</span>
            <span className="year">2018</span>
          </span>
          <h2>Initial App</h2>
          <p>
            Harry Potter Almanac able to produce the first and only app which
            mainly target the harry potter fans and small children.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Offers;
