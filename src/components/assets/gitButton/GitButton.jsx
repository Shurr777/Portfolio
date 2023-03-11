import React from 'react';
import './gitButton.css';
import githubIcon from "./gitHub-black.svg";

const GitButton = ({link}) => {
    return (
        <a href= {link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={githubIcon} alt="Github icon"/>
            Github repo
        </a>
    );
};

export default GitButton;