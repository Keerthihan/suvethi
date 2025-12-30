import React from "react";
import hap from "../assets/hap.jpg";
import { Link } from "react-router-dom";
import "./Second.css";

const Second = () => {
  return (
    <div className="second-container">
      <img
        src={hap}
        alt="Happy Birthday"
        className="second-image"
      />

      <h1 className="second-title">Halo good morning...</h1>
      <h1 className="second-subtitle">Happy Birthday Suvethii 🎉</h1>

      <Link to="/third">
        <button className="next-button">Next</button>
      </Link>
    </div>
  );
};

export default Second;