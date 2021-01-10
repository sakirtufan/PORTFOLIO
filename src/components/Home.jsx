import React from "react";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Work from "./Work";
import Portfolio from "./Portfolio";
import { ButtonContext } from "../contexts/ButtonContext";

export default function Home() {
  const buttons = [
    { name: "Home", href: "/home" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Work Experience", href: "/work" },
    { name: "Skills & Education", href: "/skills" },
    { name: "About", href: "/about" },
  ];

  return (
    <ButtonContext.Provider value={buttons}>
      <Navbar buttons={buttons} />
      <Hero />
      <Portfolio />
      <Work />
      <Skills />
      <About />
      <Footer />
    </ButtonContext.Provider>
  );
}


