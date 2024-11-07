// //import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import "../styles/doughnut.css";
// import PropTypes from "prop-types";

// function DoughnutChart({ chartData = { labels: [], datasets: [] } }) {
//   return (
//     <div className="chart-container" style={{ backgroundColor: "white", width: "300px" }}>
//       <h2 style={{ textAlign: "center" }}>Chart title</h2>
//       <Doughnut
//         data={chartData}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Users Gained between 2016-2020"
//             }
//           }
//         }}
//       />
//     </div>
//   );
// }
// export default DoughnutChart;

// DoughnutChart.propTypes = {
//   chartData: PropTypes.object
// }




// DoughnutChart.js
//import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  RadialLinearScale,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, RadialLinearScale);

const MultiSeriesChart = ({ chartData }) => {
  return (
    <div className="chart-container" style={{ backgroundColor: 'white', width: '300px' }}>
      <h2 style={{ textAlign: 'center' }}>Users Gained</h2>
      <PolarArea data={chartData} />
    </div>
  );
};

export default MultiSeriesChart;

MultiSeriesChart.propTypes = {
  chartData: PropTypes.object
}
