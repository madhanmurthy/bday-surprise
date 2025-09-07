import React from "react";
import img1 from "../../public/img-1.jpg";
import img2 from "../../public/img-2.jpg";
import img3 from "../../public/img-3.jpg";
import img4 from "../../public/img-4.jpg";
import img5 from "../../public/img-5.jpg";
import img6 from "../../public/img-6.jpg";
import img7 from "../../public/img-7.jpg";
import img8 from "../../public/img-8.jpg";
import img9 from "../../public/img-9.jpg";
// import img10 from "../../public/img-1.jpg";
// import bgImage from "./images/bg.png";
import "./RotatingGallery.css";

const RotatingGallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    //  img10
  ];
  return (
    <div className="banner">
      <div
        className="slider"
        style={{ "--quantity": images.length } as React.CSSProperties}
      >
        {images.map((src, index) => (
          <div
            key={src}
            className="item"
            style={{ "--position": index + 1 } as React.CSSProperties}
          >
            <img src={src} alt={`dragon_${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="content">
        <div className="author">
          <h2>Happy Birthday Manjari 🩷</h2>
        </div>
      </div>
    </div>
  );
};

export default RotatingGallery;
