import React from "react";
import "./portfolio.css"
import firstProject from "../../assets/firstProject.png"
import secondProject2 from "../../assets/secondProject2.png"
import thirdProject from "../../assets/thirdProject.png"

const Portfolio = () => {

    const cardData = [
        {
            id: 1,
            image: firstProject,
            projName: "Safora Restaurant Website",
            projDesc: "Elegant restaurant landing page design.",
            link: "https://adorable-genie-8e8613.netlify.app/"
        },
        {
            id: 2,
            image: secondProject2,
            projName: "Personal Portfolio v1",
            projDesc: "Responsive portfolio with smooth interactions.",
            link: "https://namansinghchauhan-portfolio.netlify.app/"
        },
        {
            id: 3,
            image: thirdProject,
            projName: "Developer Portfolio v2",
            projDesc: "Modern React portfolio with animations.",
            current: true
        }
    ]
    const handleProjectsClicks = (item)=>{
        if(item.current){
            window.location.reload()
        }else{
            window.open(item.link, "_blank")
        }
    }
    return (
        <div className="portfolio-container">
            <div className="port-heading">
                <h1>Portfolio</h1>
            </div>
            <div className="port-breaker"></div>
            <div className="card-scroll">
                {cardData.map((item) => (
                    <div className="card" key={item.id} onClick={() => handleProjectsClicks(item)} style={{ cursor: "pointer" }}>

                        <div className="project-image" style={{ backgroundImage: `url(${item.image})` }}>
                        </div>
                        <div className="name-desc">
                            <div className="project-name">
                                <h3>{item.projName}</h3>
                            </div>
                            <div className="name-desc-breaker"></div>
                            <div className="project-desc">
                                <h4>{item.projDesc}</h4>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Portfolio