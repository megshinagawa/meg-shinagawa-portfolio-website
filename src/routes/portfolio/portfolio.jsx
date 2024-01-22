import React from "react";
import "./portfolio.css";
import project1 from "./assets/dummy.png";

const Portfolio = () => {
    return (
        <div>
            <h2>Portfolio</h2>
            <hr/>
            <div className="portfolio-content">
                <div className="portfolio-object">
                    <img className="portfolio-image" src={ project1 }/>
                    <div className="portfolio-text">
                        <h3>Project Name</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Iure alias quis exercitationem fugit consectetur commodi, 
                            laborum eligendi nostrum quod.
                        </p>
                    </div>
                </div>

                <div className="portfolio-object">
                    <img className="portfolio-image" src={ project1 }/>
                    <div className="portfolio-text">
                        <h3>Project Name</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Iure alias quis exercitationem fugit consectetur commodi, 
                            laborum eligendi nostrum quod.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Portfolio;