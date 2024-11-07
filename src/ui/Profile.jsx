//import React from 'react';
import "../styles/profile.css";


const Profile = () => {
  return (
    <div className="Profile">
       <div className="Profile-img">
         <img src="./Profilepic.jpg" alt="profile" />
        </div>
        
        <div className="Profile-info">
          <h3>Jane Pearson</h3>
          <p>Administrator</p>
        </div>    
    </div>
  )
}

export default Profile;