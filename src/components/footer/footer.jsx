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
                <a href="https://www.youtube.com/@MegShinagawa"><li className="footer-element"><img className="icon" src={ youtube }/></li></a>
                <a href="https://github.com/megshinagawa"><li className="footer-element"><img className="icon" src={ github }/></li></a>
                <a href="https://www.linkedin.com/in/meg-shinagawa/"><li className="footer-element"><img className="icon" src={ linkedin }/></li></a>
                <a href="https://www.instagram.com/megshinagawa/"><li className="footer-element"><img className="icon" src={ instagram }/></li></a>
            </ul>
            <p id="copyright">Copyright © 2024 Meg Shinagawa</p>
        </div>
    );
}
export default Footer;