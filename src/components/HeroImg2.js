import "./HeroImg2Styles.css";
import React from 'react';
import IntroImg2 from "../assets/project.gif";

const HeroImg2 = (props) => {
    return (
        <div className="hero-img">
            <div className="mask2">
                <img className="intro-img2" src={IntroImg2} alt="hero" />
            </div>
            <div className="heading">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default HeroImg2;