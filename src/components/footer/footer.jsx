import React from "react";
import "./footer.css"
import youtube from './youtube.png';
import github from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-elements">
                <li className="footer-element"><img className="icon" src={ youtube }/></li>
                <li className="footer-element"><img className="icon" src={ github }/></li>
                <li className="footer-element"><img className="icon" src={ linkedin }/></li>
                <li className="footer-element"><img className="icon" src={ instagram }/></li>
            </ul>
            <p id="copyright">Copyright © 2024 Meg Shinagawa</p>
        </div>
    );
}
export default Footer;