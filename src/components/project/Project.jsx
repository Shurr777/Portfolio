import React from 'react';
import GitButton from "../assets/gitButton/GitButton";

const Project = ({title, skills, img}) => {
    return (
        <div className="project-details">
            <h1 className="title1">{title}</h1>

            <img src={img} alt="Woodluck" className="project-details__cover"/>

            <div className="project-details__dec">
                <p>Skills:</p>
                <p>{skills}</p>
            </div>
            <GitButton link="https://github.com"/>
        </div>
    );
};

export default Project;