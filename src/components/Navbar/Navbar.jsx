import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";
import myImg from "../../assets/naman.jpeg";
import hamburger from "../../assets/hamburger.png"

const Navbar = ()=>{
return(
    <nav>
        <div className="left">
            <span className="image">
                <img src={myImg} alt="" />
            </span>
            <span className="name">
                Naman Singh Chauhan
            </span>
        </div>
        <div className="center">
            <ul>
                <li><Link to= {'/'}>Home</Link></li>
                <li><Link to= {'/skills'}>Skills</Link></li>
                <li><Link to= {'/portfolio'}>Portfolio</Link></li>
                <li><Link to= {'/blog'}>Blog</Link></li>
            </ul>
        </div>
        <div className="right">
            <button><Link to={'./contact'}>Contact Me</Link></button>
        </div>
        <div className="hamburger">
            <img src={hamburger} alt="" />
        </div>
    </nav>
)
}
export default Navbar