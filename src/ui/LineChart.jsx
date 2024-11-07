import  { useRef, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

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

  const renderChart = () => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy any existing instance
    }

    // Create a deep clone of chartData to avoid issues with frozen objects
    const clonedData = {
      ...chartData,
      datasets: chartData.datasets.map((dataset) => ({ ...dataset })),
    };

    chartRef.current = new ChartJS(canvasRef.current, {
      type: "line",
      data: clonedData,
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "User Activity" },
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
  chartData: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        data: PropTypes.arrayOf(PropTypes.number),
        backgroundColor: PropTypes.string,
        borderColor: PropTypes.string,
        borderWidth: PropTypes.number,
      })
    )
  }),
};
