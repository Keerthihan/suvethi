import React from 'react'
import qut from '../assets/qwe.jpg'
import { Link } from 'react-router-dom'
import './Second.css'
const fi = () => {
  return (
    <div className="second-container">
      <img
        src={qut}
        alt="Happy Birthday"
        className="second-image"
      />

      <Link to="/last">
        <button className="next-button">
          Done uhhh 🤍
        </button>
      </Link>
    </div>
  )
}

export default fi