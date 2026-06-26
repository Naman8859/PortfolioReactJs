import React from "react";
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github4.png"
import "./footer.css"

const Footer = () => {
    const openGithub = ()=>{
        window.open("https://github.com/Naman8859", "_blank")
    }
    const openInsta = ()=>{
        window.open("https://www.instagram.com/am_thakurnaman_00118?igsh=c3VzcHl3N3A3d2th&utm_source=qr", "_blank")
    }
    const openLinkedIn = ()=>{
        window.open("https://www.linkedin.com/in/naman-singh-chauhan-9702461b2/", "_blank")
    }
    return (
        <div className="footer">
            <div className="icon-links">
                <div className="instagram">
                    <img src={instagram} alt="Instagram"
                   onClick={openInsta} 
                   style={{cursor:"pointer"}}
                />
                </div>
                <div className="github">
                    <img src={github} alt="Github"
                    onClick={openGithub}
                    style={{cursor:"pointer"}}
                    />
                </div>
                <div className="linkedin">
                    <img src={linkedin} alt="LinkedIn"
                    onClick={openLinkedIn}
                    style={{cursor:"pointer"}}
                    />
                </div>
            </div>
            <div className="copyright">
                <h3>Naman Singh Chauhan &#169; 2026</h3>
            </div>
        </div>
    )
}

export default Footer