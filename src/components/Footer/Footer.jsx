import React from "react";
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github3.png"
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="icon-links">
                <div className="instagram">
                    <img src={instagram} alt="" />
                </div>
                <div className="github">
                    <img src={github} alt="" />
                </div>
                <div className="linkedin">
                    <img src={linkedin} alt="" />
                </div>
            </div>
            <div className="copyright">
                <h3>Naman Singh Chauhan &#169; 2026</h3>
            </div>
        </div>
    )
}

export default Footer