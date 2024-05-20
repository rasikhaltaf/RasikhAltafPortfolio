import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import HeroSec from "./components/HeroSection/HeroSec";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/NavbarSec/Navbar";
import Education from "./components/EducationSec/Education";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import ProjectDetails from "./components/ProjectDetails/index"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg,
    rgba(204,0,187,0.15) 0%,
    rgba(201, 32, 184,0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(0,70,209,0) 0%,
    rgba(0, 70, 2094,0.15) 50%
  );
  width: 100%;
  clip-path: polygon(0 80, 100% 0, 100% 100%,30% 98%, 0 100%);
`

const App = () => {

  // const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSec />
          <Wrapper>
          <Skills />
          <Experience />
          <Project openModal={openModal} setOpenModal={setOpenModal} />
          <Education />
          <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;


//Next Level ReactJs Portfolio Website (NEW 2023) ✅ | Responsive Portfolio | ReactJs Beginner Project