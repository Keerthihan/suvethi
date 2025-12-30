import React from "react";
import bgGif from "../assets/bg.gif";
import { Link } from "react-router-dom";
import "./Second.css";

const First = () => {
  return (
    <div
      className="first-container"
      style={{ backgroundImage: `url(${bgGif})` }}
    >
      <h1 className="first-title">
        Ena josichitu irruka 😌  
        <br />
        kela click pannu 👇
      </h1>

      <Link to="/second">
        <button className="first-button">
          Inga ✨
        </button>
      </Link>
    </div>
  );
};

export default First;