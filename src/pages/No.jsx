import React from "react";
import sad from "../assets/sad.jpg";
import { Link } from "react-router-dom";
import "./Second.css";
const No = () => {
  return (
    <div className="second-container">
      <img
        src={sad}
        alt="Happy Birthday"
        className="second-image"
      />

      <h1 className="second-title">
        Konjam work irruku pa 😔
      </h1>

      <Link to="/fi">
        <button className="next-button">
          Sari apa vidu 🤍
        </button>
      </Link>
    </div>
  );
};

export default No;