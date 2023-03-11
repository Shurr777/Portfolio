import React from 'react';
import {NavLink} from "react-router-dom";
import './navBar.css';
import DarkModeButton from "../assets/buttonDarkMode/DarkModeButton";

const NavBar = () => {

    const activeLink = 'navlist__link navlist__link--active';
    const normalLink = 'navlist__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav_row">
                    <NavLink className="logo" to="/">
                        <strong>Freelancer</strong> Logo
                    </NavLink>
                    <DarkModeButton/>
                    <ul className="navlist">
                        <li className="navlist__item">
                            <NavLink
                                className={({isActive}) => isActive ? activeLink : normalLink}
                                to="./projects">
                                Projects
                            </NavLink>
                        </li>
                        <li className="navlist__item">
                            <NavLink
                                className={({isActive}) => isActive ? activeLink : normalLink}
                                to="./skills">
                                Skills
                            </NavLink>
                        </li>
                        <li className="navlist__item">
                            <NavLink
                                className={({isActive}) => isActive ? activeLink : normalLink}
                                to="./contacts">
                                Contacts
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;