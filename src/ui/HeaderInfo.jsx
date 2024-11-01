import React from 'react';
import "../styles/headerInfo.css";
import Profile from "./Profile.jsx";

const HeaderInfo = () => {
  return (
    <div className="header-info">
        
        <div className="blue-link">
          Source code
        </div>
    
       <div className="notification">
           <img src="./Notification.png" />
           <span className="red-dot"></span>
        </div>

      <Profile  />


    </div>
  )
}

export default HeaderInfo;