import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 px-1">
            <h4>Sakir Tufan | Full Stack Web Developer</h4>
            <p>
              Shoot me an email:{" "}
              <a href="mailto:sakirtufan49@gmail" className="text-red">
                sakirtufan49@gmail.com
              </a>
            </p>
          </div>
          <div className="col-sm-6 py-2">
            <ul className="social-icons d-flex justify-content-center align-items-center">
              <li className="px-2">
                <a
                  href="https://github.com/sakirtufan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-light fa-2x"></i>
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://instagram.com/sakirtufan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-light fa-2x"></i>
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://twitter.com/sakirtufan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter text-light fa-2x"></i>
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.linkedin.com/in/şakir-tufan-699814196"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in text-light fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
