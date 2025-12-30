import React from "react";
import suvethi2 from "../assets/suvethi2.png";
import { Link } from "react-router-dom";
import "./Second.css";

const Last = () => {
  return (
    <div
      className="last-container"
      style={{ backgroundImage: `url(${suvethi2})` }}
    >
      <Link to="/Lastfi">
        <button className="next-button last-button">
          Inoru Edit irruku 😌✨
        </button>
      </Link>
    </div>
  );
};

export default Last;