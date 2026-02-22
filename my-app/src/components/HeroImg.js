import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import AntiGravity from "./AntiGravity";
import ProfileImg from "../assets/prof.jpeg";
import BlurText from "./BlurText";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="hero-bg">
        <AntiGravity
          count={800}
          magnetRadius={6}
          ringRadius={7}
          color="#5227FF"
          autoAnimate
        />
      </div>

      <div className="hero-container">
        <div className="hero-left">

          <BlurText
            text="Hi 👋, I'm Abhishek Nayak"
            className="hero-greeting"
            delay={60}
            animateBy="words"
          />

          <BlurText
            text="A Full-Stack Developer"
            as="h1"
            className="hero-heading"
            delay={80}
            animateBy="words"
          />

          <div className="hero-btns">
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img src={ProfileImg} className="img" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default HeroImg;