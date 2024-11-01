import React from 'react';
import Stats from "../../components/Stats/Stats.jsx";
import UserActivity from "../../components/UserActivity/UserActivity";
import ChartGrid from "../../components/ChartGrid/ChartGrid";
import "./home.modules.css";



const Home = ({ chartData }) => {
  return (
    <div className = "home">
      <h1> Dashboard </h1>
      
      <Stats  />

      <div className="Charts">
        <UserActivity chartData={chartData} />
         
         <ChartGrid chartData={chartData} />
       </div> 
             
    </div>
  )
}

export default Home;