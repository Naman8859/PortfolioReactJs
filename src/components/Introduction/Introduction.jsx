import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import next from "../../assets/next.png";
import developer from "../../assets/developeIllustration.png";



const Introduction = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-name">
                    <h1>Hello, I am <br /> Naman Singh Chauhan</h1>
                </div>
                <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit neque possimus rem maiores. Corporis deserunt quisquam praesentium voluptates nostrum illo sit, molestiae repellat incidunt dignissimos neque odit. Itaque ex tenetur nobis suscipit. Et?</div>
                <div className="left-button">
                    <button>
                        <Link to={'./contact'}>Contact Me!
                            <span className="intro-btn-img"><img src={next} alt="" /></span>
                        </Link>
                    </button>
                </div>
            </div>
            <div className="intro-right">
                <img src={developer} alt="" />
            </div>
        </div>

    )
}
export default Introduction