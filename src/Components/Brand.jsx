import React from "react";
import "./brand.css";
import video from "../Images/short-video.mp4";

const Brand = () => {
  return (
    <div className="containerA">
      <div className="smartphone">
        <div className="content">
          <iframe
            src={video}
            alt="video"
            title="Harry Potter Video"
            style={{ width: "100%", border: "none", height: "100%" }}
          />
        </div>
      </div>
      <div className="layoutposition">
        <h1  data-aos="fade-left">The Houses That Are Available In This App</h1>
      </div>
    </div>
  );
};

export default Brand;
