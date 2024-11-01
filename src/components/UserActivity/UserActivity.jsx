import React from 'react';
import LineChart from "../../ui/LineChart.jsx";
import "./userActivity.modules.css";

const UserActivity = ({ chartData }) => {
  return (
    <div className="userActivity">
     <LineChart chartData={chartData} />
        <div className="users">
          <div className="head">
            <p>USER</p>

            <p>COMMIT</p>

            <p>DATE</p> 
           </div> 

           <div className="list">
             
             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
             <img className="userimg"  src="./tiffany-longewa.jpg" />
             <p>Ronald Bradley</p>
              </div>

             <p>Initial commit</p>
             
             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
             <p>May 6, 2018</p>
             <img className="calendar" src="calendar.png" />
             </div>
           </div>

           <div className="list">
            
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
             <img className="userimg" src="linyang.avif" />
             <p>Ronald Bradley</p>
             </div>

             <p>Initial commit</p>

             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>   
             <p>May 6, 2018</p>
             <img className="calendar" src="calendar.png" />
             </div>

           </div>

           <div className="list">
             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
             <img className="userimg" src="good-faces.jpg" />
             <p>Ronald Bradley</p>
             </div>

             <p>Initial commit</p>
             
             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
             <p>May 6, 2018</p>
             <img className="calendar" src="calendar.png" />
             </div>
           </div>
        
        </div>
    </div>
  )
}

export default UserActivity;