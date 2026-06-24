import React from "react";
import "./wave.css"

const Wave = () => {
  return (
    <div className="wave">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,288L48,250.7C96,213,192,139,288,122.7C384,107,480,149,576,181.3C672,213,768,235,864,256C960,277,1056,299,1152,282.7C1248,267,1344,213,1392,186.7L1440,160L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default Wave;