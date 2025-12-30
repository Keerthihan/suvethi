import React from "react";
import thi from "../assets/thi.jpg";
import { Link } from "react-router-dom";
import "./Second.css";

const Third = () => {
  return (
    <div className="second-container">
      <img
        src={thi}
        alt="Happy Birthday"
        className="second-image"
      />

      <h1 className="second-title">
        Sari nan ah first wish ?? 😄
      </h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/forth">
          <button className="next-button">Aama</button>
        </Link>

        <Link to="/forth">
          <button className="next-button">Aama</button>
        </Link>
      </div>
    </div>
  );
};

export default Third;