import React from 'react';
import './footer.css'
import git from "../../img/icons/gitHub.svg";
import insta from "../../img/icons/instagram.svg";
import linkedin from "../../img/icons/linkedIn.svg";
import twitter from "../../img/icons/twitter.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!"><img src={git} alt="Github icon"/></a></li>
                        <li className="social__item">
                            <a href="#!"><img src={insta} alt="Github icon"/></a></li>
                        <li className="social__item">
                            <a href="#!"><img src={linkedin} alt="Github icon"/></a></li>
                        <li className="social__item">
                            <a href="#!"><img src={twitter} alt="Github icon"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 al-ber. что то там</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;