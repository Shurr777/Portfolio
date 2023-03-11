import React from 'react';
import './projects.css';
import Project from "../../project/Project";

import {projects} from "../../../helpers/projectList";


const Projects = () => {
    return (
        <main className="section">

            {projects.map((p) => {
                return (
                    <Project
                        key={p.title}
                        title={p.title}
                        skills={p.skills}
                        img={p.img}
                    />
                )
            })}
        </main>
    );
};

export default Projects;