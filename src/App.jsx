import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Introduction from "./components/Introduction/Introduction.jsx";
import SkillsPart from "./components/SkillsPart/Skills.jsx";
import About from "./components/AboutPart/About.jsx";
import Wave from "./components/AboutPart/Wave.jsx";
import Portfolio from "./components/PortfolioPart/Portfolio.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () =>{
  return(
  <>
  <Navbar />
  <Introduction />
  <SkillsPart />
  <About />
  <Portfolio />
  <Footer />
  </>
  )
}

export default App
