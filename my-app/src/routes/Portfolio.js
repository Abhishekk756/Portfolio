import React from "react";
import HeroImg from "../components/HeroImg";
import Work from "../components/Work";
import About from "./About";

const Portfolio = () => {
  return (
    <div className="container">
      <HeroImg />
      <Work />
      <About />
    </div>
  );
};

export default Portfolio;