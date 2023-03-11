import React from 'react';
import './home.css'
import Header from "../../header/Header";
import cherry from "../../../img/projects/Cherry.png";
import grants from "../../../img/projects/grants.png";
import woodluck from "../../../img/projects/woodluck.png";

const Home = () => {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container">
                    <h2 className="title1">Projects</h2>
                    <ul className="projects">
                        <li className="project">
                            <a href="#!">
                                <img src={cherry} alt="Cherry project" className="project__image"/>
                                <h3 className="project__title">Cherry</h3>
                            </a>
                        </li>
                        <li className="project">
                            <a href="http://grants.warm.if.ua">
                                <img src={grants} alt="Cherry project" className="project__image"/>
                                <h3 className="project__title">Grants</h3>
                            </a>
                        </li>
                        <li className="project">
                            <a href="https://woodluck.org.ua">
                                <img src={woodluck} alt="Cherry project" className="project__image"/>
                                <h3 className="project__title">Woodluck</h3>
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Home;