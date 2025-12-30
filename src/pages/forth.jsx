import React from "react";
import act from "../assets/act.jpg";
import { Link } from "react-router-dom";
import "./Second.css";
const Forth = () => {
  return (
    <div className="second-container">
      <img
        src={act}
        alt="Happy Birthday"
        className="second-image"
      />

      <h1 className="second-title">
        Sari naliku varathi kovipija?? 😌
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Link to="/yes">
          <button className="next-button">
            Chaa apdee lam ila
          </button>
        </Link>

        <Link to="/no">
          <button className="next-button">
            Ohm piraku kannula mulichidatha 😤
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Forth;