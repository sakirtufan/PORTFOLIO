import React from "react";
import "./ButtonGithub.css";

const ButtonGithub = () => {
  return (
    <div className="github">
      <button className="btn btn-github">
        <p>
          <i className="fab fa-github "></i>
        </p>

        <p>Checkout this site on Github.</p>
      </button>
    </div>
  );
};

export default ButtonGithub;
