import React, {useEffect, useRef, useState} from "react";
import "./Skills.css";

const SkillsPart = () => {
    const skills = [
        { name: "HTML / CSS", percentage: 90 },
        { name: "JavaScript", percentage: 80 },
        { name: "React JS", percentage: 80 },
        { name: "Python", percentage: 80 },
        { name: "Node JS", percentage: 70 },
        { name: "Express JS", percentage: 70 },
        { name: "MongoDB", percentage: 70 },
        { name: "Git / Github", percentage: 70 },
    ]
    const skillsRef = useRef(null)
    const [animate, setAnimate] = useState(false)
    const [counts, setCounts] = useState(skills.map(()=> 0))
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setAnimate(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.3
            }
        );
        if(skillsRef.current){
            observer.observe(skillsRef.current)
        }
        return ()=> observer.disconnect()
    }, [])

    useEffect(() => {
    if (!animate) return;

    skills.forEach((skill, index) => {
        let start = 0;

        const interval = setInterval(() => {
            start++;

            setCounts(prev => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
            });

            if (start >= skill.percentage) {
                clearInterval(interval);
            }
        }, 20);
    });

}, [animate]);


    return (
        <div className="skillsPart" ref={skillsRef}>
            <div className="show-skills">
                <div className="sk-heading">
                    <h1>Skills</h1>
                </div>
                <div className="sk-breaker"></div>
                <div className="skills-grid">
                    {skills.map((skill, index) => {
                        const radius = 60
                        const circumference = 2 * Math.PI * radius

                        const offset = animate ? circumference - (skill.percentage/100)*circumference : circumference;

                        return (

                            <div className="skill-card" key={index}>
                                <div className="circle">
                                    <svg width="140" height="140" >
                                        <circle
                                            className="bg"
                                            cx="70"
                                            cy="70"
                                            r="60"

                                        />
                                        <circle
                                            className="progress"
                                            cx="70"
                                            cy="70"
                                            r="60"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={offset}
                                        />
                                    </svg>
                                    <div className="percentage">
                                        {counts[index]}%
                                    </div>

                                </div>
                                <h3>{skill.name}</h3>
                            </div>
                        )
                    })}

                </div>
                
            </div>
        </div>
    )
}
export default SkillsPart