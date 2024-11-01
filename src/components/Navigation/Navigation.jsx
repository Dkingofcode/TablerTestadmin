import React from 'react';
import { Link } from "react-router-dom";
import "./navigation.modules.css";

const Navigation = () => {
//    const navigate = useNavigate();

//    const handleClick = (link) => {
//       navigate(link)
//    }

    return (
    <div className="Navigation">
       <ul className="navLinks">
        <div className="link">
        <Link style={{ textDecoration: "none", color: "grey" }} to="/"><img src="home.png" /> Home</Link>
        </div>
        <div className="link">
        <Link style={{ textDecoration: "none", color: "grey" }} to="/interface"><img src="cube.png" /> Interface</Link>
        </div>
        <div className="link">
        <Link style={{ textDecoration: "none", color: "grey" }} to="/components"><img src="folder.png" /> Components</Link>
        </div>
        <div className="link">
        <Link style={{ textDecoration: "none", color: "grey" }} to="/pages"><img src="file.png" /> Pages</Link>
         </div>
         <div className="link">
        <Link style={{ textDecoration: "none", color: "grey" }} to="/forms"><img src="form.png" /> Forms</Link>
        </div>
        <div className="link">
        <Link style={{ textDecoration: "none", color: "grey" }} to="/gallery"><img src="gallery.png" /> Gallery</Link>
         </div>
         <div className="link">
        <Link style={{ textDecoration: "none", color: "grey" }} to="documentation"><img src="file.png" /> Documentation</Link>
        </div>
       </ul> 
    </div>
  )
}

export default Navigation;