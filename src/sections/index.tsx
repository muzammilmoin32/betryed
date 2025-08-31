import React from "react";
import FadeContainer from "src/components/FadeContainer/FadeContainer";
import { About } from "./About/About";
import { BetrayalNomics } from "./BetrayalNomics/BetrayalNomics";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import LaunchTimer from "./LaunchTimer/LaunchTimer";
import Masterplan from "./Masterplan/Masterplan";
import { NavBar } from "./NavBar/NavBar";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import { Trailer } from "./Trailer/Trailer";
import WatchYourHead from "./WatchYourHead/WatchYourHead";

const AppForDesktop = () => {
  const navbarRef = React.useRef<HTMLUListElement>(null);

  return (
    <>
      <div id="main">
        <NavBar ref={navbarRef} style={{ position: "fixed" }} />
        {/* <GetBetrayedFixed /> */}
        <FadeContainer id="home" navbarRef={navbarRef} showNavbar>
          <Hero />
        </FadeContainer>
        <FadeContainer id="trailer" navbarRef={navbarRef} showNavbar>
          <Trailer />
        </FadeContainer>
        <FadeContainer id="why" navbarRef={navbarRef} showNavbar>
          <Section1 />
        </FadeContainer>
        <FadeContainer id="how" navbarRef={navbarRef} showNavbar>
          <Section2 />
        </FadeContainer>
        <FadeContainer id="section3" navbarRef={navbarRef} showNavbar>
          <Section3 />
        </FadeContainer>
        <FadeContainer id="launch" navbarRef={navbarRef}>
          <LaunchTimer />
        </FadeContainer>
        <FadeContainer id="about" navbarRef={navbarRef} showNavbar>
          <About />
        </FadeContainer>
        <FadeContainer navbarRef={navbarRef} showNavbar>
          <WatchYourHead />
        </FadeContainer>
        <FadeContainer id="trumpnomics" navbarRef={navbarRef}>
          <BetrayalNomics />
        </FadeContainer>
        <FadeContainer navbarRef={navbarRef}>
          <Masterplan />
        </FadeContainer>
        <FadeContainer navbarRef={navbarRef}>
          <Footer />
        </FadeContainer>
      </div>
    </>
  );
};

export default AppForDesktop;
