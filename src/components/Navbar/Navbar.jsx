import React, {useState}  from "react";
import "./navbar.css";
import {Link} from "react-router-dom";
import myImg from "../../assets/naman.jpeg";
import hamburger from "../../assets/hamburger.png"

const Navbar = ()=>{
    const [menuOpen, setMenuOpen] = useState(false)
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
        <div className={`center ${menuOpen?"active":""}`}>
            <ul>
                <li><Link to="/" onClick={()=> setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/skills" onClick={()=> setMenuOpen(false)} >Skills</Link></li>
                <li><Link to="/portfolio" onClick={()=> setMenuOpen(false)} >Portfolio</Link></li>
                <li><Link to="/blog" onClick={()=> setMenuOpen(false)} >Blog</Link></li>
            </ul>
        </div>
        <div className={`right ${menuOpen?"active":""}`}>
            <button><Link to={"/contact"}>Contact Me</Link></button>
        </div>
        <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <img src={hamburger} alt="" />
        </div>
    </nav>
)
}
export default Navbar