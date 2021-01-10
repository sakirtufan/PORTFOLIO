import React from "react";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
<<<<<<< HEAD
import Skills from "./Skills";
import Work from "./Work";
import Portfolio from "./Portfolio";
import { ButtonContext } from "../contexts/ButtonContext";

export default function Home() {
  const buttons = [
    { name: "Home", href: "/home" },
=======
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Work from "./Work";
import { ThemeContext } from '../contexts/ThemeContext';

class Home extends React.Component {
  buttons = [
    { name: "Home", href: "/" },
>>>>>>> hero
    { name: "Portfolio", href: "/portfolio" },
    { name: "Work Experience", href: "/work" },
    { name: "Skills & Education", href: "/skills" },
    { name: "About", href: "/about" },
  ];
<<<<<<< HEAD
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
=======
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => {
          const { isDarkTheme, dark, light } = contextTheme;
          const theme = isDarkTheme ? dark : light;

          return (
            <div>
              <Navbar buttons={this.buttons} />
              <Hero buttons={this.buttons} />
              <Portfolio />
              <Work />
              <Skills />
              <About />
              <Footer />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Home;
>>>>>>> hero
