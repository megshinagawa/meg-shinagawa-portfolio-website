import React from "react";
import logo from "./logo.png";
import "./navigation.css"
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <div className="header">
                <img id="logo" src={ logo }/>
                <div className="header-text">
                    <h1>Meg Shinagawa</h1>
                    <h3>YouTuber & Developer</h3>
                </div>
            </div>

            <div className="nav">
                <ul className="nav-elements">
                    <Link to="/"><li className="nav-element">About</li></Link>
                    <Link to="/portfolio"><li className="nav-element">Portfolio</li></Link>
                    <Link to="/contact"><li className="nav-element">Contact</li></Link>
                </ul>
            </div>
        </div>
    );
}
export default Navigation;