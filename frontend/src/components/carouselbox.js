import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CarouselBox.css";
import darkImg from "../assets/dark.jpeg";
import darkStairsImg from "../assets/darkStairs.jpeg";
import ddImg from "../assets/officeD.jpeg";

function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={darkImg}
          alt="Five Slide"
        />
        <Carousel.Caption>
          <div>
            <h1 className="large-title">Аренда офисов</h1>
            <p className="large-subtitle">
              {" "}
              Офисные помещения площадью от 14 м<sup>2</sup>
            </p>
          </div>
          <Link to="/arenda">
            <Button variant="secondary">Узнать больше</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={darkStairsImg}
          alt="Third Slide"
        />
        <Carousel.Caption>
          <div>
            <h1 className="large-title">Аренда офисов</h1>
            <p className="large-subtitle">
              {" "}
              Офисные помещения площадью от 14 м<sup>2</sup>
            </p>
          </div>
          <Link to="/arenda">
            <Button variant="secondary">Узнать больше</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={ddImg}
          alt="Six Slide"
        />
        <Carousel.Caption>
          <div>
            <h1 className="large-title">Аренда офисов</h1>
            <p className="large-subtitle">
              {" "}
              Офисные помещения площадью от 14 м<sup>2</sup>
            </p>
          </div>
          <Link to="/arenda">
            <Button variant="secondary">Узнать больше</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselBox;
