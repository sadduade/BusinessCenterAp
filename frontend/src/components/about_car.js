import React, { useState } from "react";
import "./Slider.css";

import firstImg from "../assets/building.jpg";
import secondImg from "../assets/enter2.jpg";
import thirdImg from "../assets/upstairs.jpg";
import fourImg from "../assets/stand.jpg";
import fiveImg from "../assets/halltwo.jpg";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [firstImg, secondImg, fourImg, fiveImg, thirdImg];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={index === currentSlide ? "slide active" : "slide"}
        />
      ))}
      <button onClick={prevSlide}>&lt;</button>
      <button onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default Slider;
