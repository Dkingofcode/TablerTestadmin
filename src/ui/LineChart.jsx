import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData }) {

const colors =     [
   "rgba(75,192,192,1)",
   "&quot;#ecf0f1",
   "#50AF95",
   "#f3ba2f",
   "#2a71d0"
 ];

    
  return (
    <div className="chart-container" style={{ backgroundColor: "white", }}>
      <h2 style={{ textAlign: "center" }}>Development Activity</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;