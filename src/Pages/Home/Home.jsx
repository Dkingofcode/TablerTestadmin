//import React from 'react';
import Stats from "../../components/Stats/Stats.jsx";
import UserActivity from "../../components/UserActivity/UserActivity";
import ChartGrid from "../../components/ChartGrid/ChartGrid";
import "./home.modules.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  const dispatch = useDispatch();
  const ChartData = useSelector((state) => state.chart.data);

  useEffect(() => {
    dispatch({ type: 'chart/fetchData' });
  }, [dispatch]);

  const chartData = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Users Gained",
        data: [30, 45, 60, 70],
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "black",
        borderWidth: 2
      }
    ]
  };
  


  return (
    <div className = "home">
      <h1> Dashboard </h1>
      
      <Stats  />

      <div className="Charts">
        <UserActivity chartData={chartData} />
         
         <ChartGrid chartData={ChartData} />
       </div> 
             
    </div>
  )
}

export default Home;

Home.propTypes = {
    ChartData: PropTypes.object
}