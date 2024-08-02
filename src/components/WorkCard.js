import "./WorkCardStyles.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <div className="pro-details">
                <img src={props.imgSrc} alt="proImg" />
                <h2 className="project-title">{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className="pro-buttons">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={props.source} className="btn">Source</NavLink>
            </div>
        </div>
    )
}

export default WorkCard;