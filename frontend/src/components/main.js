import React, { Component } from "react";
import CarouselBox from "./carouselbox";
import FeaturesSection from "./FeaturesSection";

export default class About extends Component {
  render() {
    return (
      <div>
        <CarouselBox />
        <FeaturesSection />
      </div>
    );
  }
}
