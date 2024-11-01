import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../styles/doughnut.css";


function DoughnutChart({ chartData }) {
  return (
    <div className="chart-container" style={{ backgroundColor: "white", width: "300px" }}>
      <h2 style={{ textAlign: "center" }}>Chart title</h2>
      <Doughnut
        data={chartData}
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
export default DoughnutChart;