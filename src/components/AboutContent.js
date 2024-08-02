import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';
import AboutImg1 from "../assets/aboutImg1.avif";
import AboutImg2 from "../assets/aboutImg2.avif";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am Suraj.My passion is to create a wonder full frontend websites.</p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>
        </div>
        <div className="right">
           <div className="img-container">
               <div className="img-stack top">
                   <img src={AboutImg2} className="img" alt="image1"/>
               </div>
               <div className="img-stack bottom">
                   <img src={AboutImg1} className="img2" alt="image2"/>
               </div>
           </div>
        </div>
    </div>
  )
}

export default AboutContent;