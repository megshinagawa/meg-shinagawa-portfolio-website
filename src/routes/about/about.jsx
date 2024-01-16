import React from "react";
import profilepic from "./profile-picture.jpg";
import "./about.css"

const About = () => {
    return (
        <div className="about">
            <h2 className="title">About Me</h2>
            <hr/>
            <div className="about-content">
                <img id="profilepic" src={ profilepic }/>   
                <div className="about-text">
                    <p>
                        Hello herro! My name is Meg Shinagawa. I’m a YouTuber and developer based in Tokyo, Japan. 
                        Although video production and coding are two very different things, I approach both with 
                        the same goal: <strong>to empower people to express their authentic selves</strong>. 
                    </p>
                    <p>
                        Growing up in an international school in Japan, I was raised in a multi-cultural environment 
                        which allowed me to explore who I truly am freely. It taught me to think outside of my own 
                        cultural box and feel free to express my authentic self. I want to give that same sense of 
                        freedom to others around me. Whether that be through my videos on YouTube, or the tools I 
                        create using my coding skills, I want to empower everyone to live out their authentic identity.
                    </p>
                    <p>
                        On my off time, I like to sing, draw, game, and skateboard!
                    </p>
                </div>
            </div>   
            <button className="cta-button">Check out my CV</button>
        </div>
    );
}
export default About;