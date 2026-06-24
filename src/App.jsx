import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Introduction from "./components/Introduction/Introduction.jsx";
import SkillsPart from "./components/SkillsPart/Skills.jsx";
import About from "./components/AboutPart/About.jsx";
import Wave from "./components/AboutPart/Wave.jsx";

const App = () =>{
  return(
  <>
  <Navbar />
  <Introduction />
  <SkillsPart />
  <About />
  </>
  )
}

export default App
