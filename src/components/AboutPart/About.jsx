import React from "react";
import badge from "../../assets/Icono.png"
import callender from "../../assets/callender.png"
import wave from "../../assets/wave.svg"
import "./about.css"
import Wave from "./Wave";

const About = () => {
    return (
        <div className="about-container">
            <div className="about">
                <h1>About Me</h1>
            </div>
            <div className="abt-card">
                <div className="responsibility">
                    <div className="badge-img">
                        <img src={badge} alt="" />
                    </div>
                    <div className="percent">
                        <h1>100%</h1>
                    </div>
                    <div className="resp">
                        <h3>Responsibility</h3>
                    </div>
                </div>
                <div className="abt-img-container">
                    <div className="abt-img">
                        <div className="text-area">
                            <div className="percent"><h1>100%</h1></div>
                            <div className="indian"><h1>Indian</h1></div>
                        </div>
                    </div>
                </div>
                <div className="puntuality">
                    <div className="calender-img">
                        <img src={callender} alt="" />
                    </div>
                    <div className="percent">
                        <h1>100%</h1>
                    </div>
                    <div className="punt">
                        <h3>Puntuality</h3>
                    </div>
                </div>
            </div>
           <Wave />
        </div>
        
    )
}
export default About