import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div id="skills" className='p-5'>
      <div className="container mb-5">
        <h2 className="text-center text-uppercase font-weight-bold p-5">
          Skills
        </h2>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 mx-auto">
            <div id="skills">
              <div id="client-side" class="skill-group ">
                <div class="skill-group-title text-light">
                  <i class="fas fa-desktop fa-2x vibrate-2"></i>
                  <h3>Client-side</h3>
                </div>
                <div class="skill-body">
                  <div>
                    <ul>
                      <li class="">HTML5</li>

                      <li class="">CSS3 + SASS + LESS</li>

                      <li class="">Bootstrap</li>

                      <li>JQuery </li>
                      <li>JavaScript (ES6)</li>
                      <li>ReactJS</li>
                      <li>Semantic UI</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="server-side" class="skill-group">
                <div class="skill-group-title text-light">
                  <i class="fas fa-server fa-2x vibrate-2"></i>
                  <h3>Server-side</h3>
                </div>
                <div class="skill-body">
                  <div>
                    <ul>
                      <li>Node JS</li>
                      <li>Express JS</li>
                      <li>WordPress – Theme &amp; Plugin Development</li>
                      <li>Mongo DB</li>
                      <li>Axios</li>
                      <li>Redux</li>
                      <li>Heroku CLI</li>
                      <li>Python</li>
                      <li>Git and Github</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="design-more" class="skill-group">
                <div class="skill-group-title text-light">
                  <i class="fas fa-pen-fancy fa-2x vibrate-2"></i>
                  <h3>Design &amp; More</h3>
                </div>
                <div class="skill-body">
                  <div>
                    <ul>
                      <li>Figma</li>
                      <li>Adobe Photoshop</li>
                      <li>Linux</li>
                      <li>Project management</li>
                      <li>Work on a voluntary basis</li>
                      <li>Conversationally fluent in German and English</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center text-uppercase font-weight-bold p-5">
          Education
        </h2>
        <div className="row">
          <div className="col-6">
            <div class="card">
              <div class="card-header">
                <h4>Malatya Inonu University,Turkey</h4>
                <p class="text-muted">
                  Computer Education and Instructional Technology
                </p>
              </div>
              <div class="card-body d-flex p-3 justify-content-around align-items-center">
                <a
                  href="https://www.google.com/maps/place/%C4%B0n%C3%B6n%C3%BC+%C3%9Cniversitesi/@38.3302973,38.4377768,17z/data=!3m1!4b1!4m5!3m4!1s0x4076384f417eed7b:0xf0135f4a7646a348!8m2!3d38.3302973!4d38.4399655"
                  class="card-title px-1 msifir text-danger"
                >
                  <i class="fas fa-map-marker-alt text-dark mx-1"></i>
                  10.KM No:44210, 44000 Malatya, Turkey (2003-2008)
                </a>
                
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card">
              <div class="card-header">
                <h4>DCI Digital Career Institute</h4>
                <p class="text-muted">
                  Full-Stack-Web-Development
                </p>
              </div>
              <div class="card-body d-flex p-3 justify-content-around align-items-center">
                <a
                  href="https://www.google.com/maps/search/dci+berlin/@52.5177863,13.4532878,14z/data=!3m1!4b1"
                  class="card-title px-1 msifir text-danger"
                >
                  <i class="fas fa-map-marker-alt text-dark mx-1"></i>
                  Vulkanstraße 1, 10367 Berlin, Germany (2020-2021)
                </a>
                
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
