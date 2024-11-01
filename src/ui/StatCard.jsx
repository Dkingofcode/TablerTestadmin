import React from 'react';
//import upArrow from "./upArr.jpg";
//import downArrow from "./downArr.jpg";
import "../styles/statCard.css";


const StatCard = ({ num, text, rate, color }) => {
  return (
    <div className="stat-card">
       <h1>{num}</h1>
       <p>{text}</p>
       <span style={{ color: color }}>{rate}% {color === "green" ? <p>&uarr;</p>  : <p>&darr;</p>  }</span>
    </div>
  )
}

export default StatCard;