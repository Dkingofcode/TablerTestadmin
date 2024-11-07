//import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { forwardRef } from "react";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const LineChart = forwardRef(({ chartData }, ref) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);




// return (
  //   <div className="chart-container" style={{ backgroundColor: "white", }}>
  //     <h2 style={{ textAlign: "center" }}>Development Activity</h2>
  //     <Line
  //       data={chartData}
  //       options={{
  //         plugins: {
  //           title: {
  //             display: true,
  //             text: "Users Gained between 2016-2020"
  //           },
  //           legend: {
  //             display: false
  //           }
  //         }
  //       }}
  //     />
  //   </div>
  // );
  
  const renderChart = () => { 
  if (chartRef.current) {
    chartRef.current.destroy(); // Destroy any existing instance
  }
  chartRef.current = new ChartJS(canvasRef.current, {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'User Activity' },
      },
    },
  });
};

useEffect(() => {
  renderChart();
  return () => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  };
}, [chartData]);



   return <canvas ref={canvasRef} />;
});

export default LineChart;

LineChart.propTypes = {
  chartData: PropTypes.object
}
