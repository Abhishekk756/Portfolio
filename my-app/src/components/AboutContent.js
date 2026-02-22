import "./AboutContentStyles.css";
import React from 'react';
import {Link} from "react-router-dom";
import React1 from "../assets/prof.jpeg";
const AboutContent = () => {
  return <div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
        <p>Im a full stack developer.I create secure and responsive websites for my clients.</p>
        <Link to="/contact"><button className="btn">Contact</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stacktop">
                <img src={React1}
                className="img"
                alt="true"/>
            </div>
        </div>
    </div>
  </div>
}

export default AboutContent;