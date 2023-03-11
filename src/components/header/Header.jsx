import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header_wrapper">
                <h1 className="header_title">
                    <strong>Hi, my name is <em>Aleks</em></strong><br/>
                    a frontend developer
                </h1>
                <div className="header_text">
                    <p>
                        with passion for learning and creating.
                    </p>
                </div>
                <a href="#!" className="btn">Download CV</a>
            </div>
        </header>
    );
};

export default Header;