import React from "react";
import "./About.css";

export default function About() {
  return (
    
      <div className="container mb-5 p-3" id="about">
        <h2 className="text-center text-uppercase font-weight-bold p-5">
          About Me
        </h2>
        <h3>Who I Am</h3>
        <p>
          I'm coming from a teacher background. I continue my career as a
          Full-Stack Web Developer after gaining Information and Communication
          Expertise with my extensive experience.
        </p>
        <p>
          <h5>Some of my expertise are; </h5>
          <b>Front-end:</b>
          JavaScript, Typescript, JS DOM, jQuery,React, ReduxJS, HTML5,
          Responsive Design with CSS3, Bootstrap, Flexbox, Grid, Canvas
          <br /> <b>Back-end:</b> Node.Js, Express, Redis, MongoDB, Handlebars
          (also Express Handlebars), Pnp/js, MS SharePoint, working with APIs
          and JSONs, Security-based Coding (preventing XSS, Clickjacking, CSRF
          etc. attacks) Git, Github <br />
          <b>Testing:</b> Jest
        </p>
        <br />
        <h3>How I Work</h3>
        <p>
          <b>I'm a strong communicator.</b> My desire to set clear expectations
          comes from a place of genuine care and respect for the people I work
          with. I aim for authenticity, clarity and diligence.
        </p>
        <br />
        <h3>How I Live</h3>
        <p>
          I love to make jokes, and I love to laugh.I will always try to make
          you crack a smile.
          <br /> I invest enormously in bettering myself, my skills, my
          character, and my outlook on the world.
          <br /> I believe that kindness is powerful.
        </p>
      </div>
  );
}
