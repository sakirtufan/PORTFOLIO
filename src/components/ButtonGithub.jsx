import React from "react";
import "./ButtonGithub.css";


const ButtonGithub = () => {
  return (
    <div className="github">
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/sakirtufan/Portfolio_With_React" className="btn btn-github">
        <p>
          <i className="fab fa-github "></i>
        </p>
        <p>Checkout this site on Github.</p>
      </a>
    </div>
  );
};

export default ButtonGithub;
