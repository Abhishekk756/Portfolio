import "./HeroImgStyles.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../assets/prof.jpeg";
import BlurText from "./BlurText";
import Antigravity from "./Antigravity";

const HeroImg = () => {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  return (
    <div className="hero">

      {/* Background Particle Field */}
      {webglSupported && (
        <div className="hero-bg">
          <Antigravity
            count={800}
            magnetRadius={10}
            ringRadius={7}
            waveAmplitude={1.2}
            particleSize={1.6}
            lerpSpeed={0.2}
            color="#5227FF"
            autoAnimate
            particleVariance={1}
            pulseSpeed={3}
            depthFactor={1}
          />
        </div>
      )}

      {/* Hero Content */}
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