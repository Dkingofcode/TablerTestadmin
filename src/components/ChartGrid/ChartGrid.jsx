import React from 'react';
import PieChart from "../../ui/PieChart.jsx";
import DoughnutChart from "../../ui/DoughnutChart.jsx";

import "./chartGrid.modules.css";

const ChartGrid = ({ chartData }) => {
    const doughnutColors = ["rgba(34,139,34,1)", "rgba(144,238,144,1)"];
    const pieColors = ["rgba(0, 123, 255, 1)", "rgba(173, 216, 230, 1)"];
    const firstColors = ["rgba(45, 123, 150, 10)", "rgba(201, 100, 20, 12)"]

const normalColors = [    "rgba(75,192,192,1)",
   "#f3ba2f",
   "#2a71d0"
 ];



    return (
    <div className="chartGrid">
       {/* <span> <strong>Read our documentation</strong> with code samples</span> */}
       
       <DoughnutChart chartData={chartData} />
       <PieChart chartData={chartData}  />
       <DoughnutChart chartData={chartData}   />
       <PieChart chartData={chartData}  />
    </div>

  )
}

export default ChartGrid;