import React, { useContext } from "react";
import { ButtonContext } from '../contexts/ButtonContext'
import renkli from "../images/renkli.jpeg";
import Button from "./Button";
import ButtonGithub from "./ButtonGithub";
import "./Hero.css";


const Hero = () => {

  const buttons = useContext(ButtonContext);  
  
  return (
    <div id="hero" className="gray-gradient">
      <div className="container">
        <div className="hero-container">
          <div className="foto">
            <img
              className="hero-img"
              src={renkli}
              height={250}
              width={250}
              alt="foto"
            />
          </div>
          <div>
            <div className="hero-content">
              <p>My name is Sakir Tufan.</p>
              <p>
                I'm a <b>Full-Stack-Developer</b>.
              </p>
            </div>
            <div className="hero-buttons">
              {
               buttons.filter(button => 
                button.name !== 'Home').map(filteredButton =>  (                  
                    <Button button={filteredButton} key={filteredButton.name}/>                  
                ))
              } 
            </div>
          </div>
        </div>
      </div>
      <ButtonGithub />
    </div>
  );
};

export default Hero;
