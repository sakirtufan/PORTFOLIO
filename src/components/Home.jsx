import React from "react";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Work from "./Work";
import { ThemeContext } from '../contexts/ThemeContext';

class Home extends React.Component {
  buttons = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Work Experience", href: "/work" },
    { name: "Skills & Education", href: "/skills" },
    { name: "About", href: "/about" },
  ];
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
