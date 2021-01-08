import React from "react";
import renkli from '../images/renkli.jpeg'
import Button from './Button'
import ButtonGithub from "./ButtonGithub";
import './Hero.css';

const Hero = ({buttons}) => {

  
  return (
    <div id="hero" className="gray-gradient">      
      <div className="container">
        <div className="foto">
          <img src={renkli} height={250} width={250} alt="foto"/>
        </div>
        <div>
          <div className='content'>
            <p>My name is Sakir Tufan.</p>
            <p>I'm a <b>Full-Stack-Developer</b>.</p>
          </div>
          <div className='hero-buttons'>
            {
              buttons.map(button => {
                return(
                  <Button button={button}/>
                )
              })
            }            
          </div>
        </div>
      </div>
      <ButtonGithub/>
    </div>
  );
};

export default Hero;
