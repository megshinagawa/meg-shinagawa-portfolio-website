import React from "react";
import logo from "./logo.png";
import "./navigation.css"

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
                    <li className="nav-element">About</li>
                    <li className="nav-element">Portfolio</li>
                    <li className="nav-element">Contact</li>
                </ul>
            </div>
        </div>
    );
}
export default Navigation;