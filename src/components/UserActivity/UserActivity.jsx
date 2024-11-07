//import React from 'react';
import LineChart from "../../ui/LineChart.jsx";
import "./userActivity.modules.css";
import PropTypes from "prop-types"; 


const UserActivity = ({ chartData }) => {
  // Ensure chartData is defined with expected structure
  const hasChartData = chartData && chartData.labels && chartData.datasets;

  return (
    <div className="userActivity">
      {hasChartData ? (
        <LineChart chartData={chartData} />
      ) : (
        <p>Loading chart data...</p>
      )}
      <div className="users">
        <div className="head">
          <p>USER</p>
          <p>COMMIT</p>
          <p>DATE</p> 
        </div> 
           <div className="list">
             
             <div style={{ display: "flex",  alignItems: "center" }}>
             <img className="userimg"  src="./tiffany-longewa.jpg" alt='image of user' />
             <p className="userName">Ronald Bradley</p>
              </div>

             <p>Initial commit</p>
             
             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
             <p>May 6, 2018</p>
             <img className="calendar" src="calendar.png" alt='calendar icon' />
             </div>
           </div>

           <div className="list">
            
            <div style={{ display: "flex",  alignItems: "center" }}>
             <img className="userimg" src="linyang.avif" alt='image of user' />
             <p>Ronald Bradley</p>
             </div>

             <p>Initial commit</p>

             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>   
             <p>May 6, 2018</p>
             <img className="calendar" src="calendar.png" alt='calendar icon' />
             </div>

           </div>

           <div className="list">
             <div style={{ display: "flex",  alignItems: "center" }}>
             <img className="userimg" src="good-faces.jpg" alt='useromg' />
             <p>Ronald Bradley</p>
             </div>

             <p>Initial commit</p>
             
             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
             <p>May 6, 2018</p>
             <img className="calendar" src="calendar.png" alt='calendar' />
             </div>
           </div>
        
        </div>
    </div>
  )
}

export default UserActivity;

// UserActivity.defaultProps = {
//   chartData: {
//     labels: [],
//     datasets: []
//   }
// };


UserActivity.propTypes = {
  chartData: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    datasets: PropTypes.arrayOf(PropTypes.object)
  })
};