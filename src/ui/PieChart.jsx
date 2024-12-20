//import React from "react";
import { Pie } from "react-chartjs-2";
import "../styles/Piechart.css";
import PropTypes from "prop-types";

function PieChart({ chartData }) {
  return (
    <div className="chart-container" style={{ backgroundColor: "white", width: "300px" }}>
      <h2 style={{ textAlign: "center" }}>Chart Title</h2>
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

PieChart.propTypes = {
  chartData: PropTypes.object
}