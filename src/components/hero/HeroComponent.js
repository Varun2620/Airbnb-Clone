import React from "react";

import './Hero.css'

function HeroComponent() {
    return (
        <div className="hero-container">
            <img src='images/exp.jpg' alt="" className="exp-img" />
            <div className="hero-content">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}

export default HeroComponent