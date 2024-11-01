import React from "react";
import { Pie } from "react-chartjs-2";
import "../styles/Piechart.css";


function PieChart({ chartData }) {
  return (
    <div className="chart-container" style={{ backgroundColor: "white", width: "300px" }}>
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={ chartData }
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;