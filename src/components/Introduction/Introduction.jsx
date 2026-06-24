import React from "react";
import { Link } from "react-router-dom";
import './introduction.css';
import next from "../../assets/next.png";
import developer from "../../assets/developeIllustration.png";



const Introduction = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-name">
                    <h1>Hello, I am <br /> Naman Singh Chauhan</h1>
                </div>
                <div className="intro-about"><p>I am Naman Singh Chauhan, a passionate Full Stack Web Developer and final-year BCA student from India. I enjoy building modern, responsive, and user-friendly web applications using technologies like React.js, JavaScript, HTML, CSS, Node.js, and Python. I am constantly learning new technologies and improving my problem-solving skills. My goal is to create impactful digital experiences and grow into a skilled software developer.</p> </div>
                <div className="intro-left-button">
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