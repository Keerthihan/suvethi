import React from "react";
import yes from "../assets/yes.jpg";
import { Link } from "react-router-dom";
import "./Second.css"; // 👈 this is okay IF you are using this file

const Yes = () => {
  return (
    <div className="second-container">
      <img
        src={yes}
        alt="Happy Birthday"
        className="second-image"
      />

      <Link to="/last">
        <button className="next-button">
          Apoo okiii 😄💖
        </button>
      </Link>
    </div>
  );
};

export default Yes;