// //import React from 'react';
// import PieChart from "../../ui/PieChart.jsx";
// import DoughnutChart from "../../ui/DoughnutChart.jsx";
// import PropTypes from "prop-types";


// import "./chartGrid.modules.css";

// const ChartGrid = ({ chartData = { labels: [], datasets: [] } }) => {
//    const doughnutColors = ["rgba(34,139,34,1)", "rgba(144,238,144,1)"];
//    const pieColors = ["rgba(0, 123, 255, 1)", "rgba(173, 216, 230, 1)"];
//    const firstColors = ["rgba(45, 123, 150, 10)", "rgba(201, 100, 20, 12)"];
//    const normalColors = ["rgba(75,192,192,1)", "#f3ba2f", "#2a71d0"];

//    return (
//      <div className="chartGrid">
//         <DoughnutChart chartData={chartData} />
//         <PieChart chartData={chartData} />
//         <DoughnutChart chartData={chartData} />
//         <PieChart chartData={chartData} />
//      </div>
//    );
// };

// export default ChartGrid;

// ChartGrid.propTypes = {
//    chartData: PropTypes.object
// }



// ChartGrid.js
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DoughnutChart from '../../ui/DoughnutChart';
import PieChart from '../../ui/PieChart';
import  MultiSeriesChart from  "../../ui/MultiSeries";
//import { Pie } from 'react-chartjs-2';
import  "./chartGrid.modules.css";



const ChartGrid = () => {
  const dispatch = useDispatch();
  const chartData = useSelector((state) => state.chart.data);

  useEffect(() => {
    dispatch({ type: 'chart/fetchData' });
  }, [dispatch]);

  return (
    <div className="chartGrid">
      <DoughnutChart chartData={chartData} />
      <PieChart chartData={chartData} />
      <MultiSeriesChart chartData={chartData} /> 
      <DoughnutChart chartData={chartData} />  
    </div>
  );
};

export default ChartGrid;












