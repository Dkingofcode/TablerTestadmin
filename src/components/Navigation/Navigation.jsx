import { useState } from 'react';
import { Link } from "react-router-dom";
import "./navigation.modules.css";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="Navigation">
            <button className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            
            <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
                <div className="link">
                    <Link to="/" className="navLink">
                        <img src="home.png" alt="Home icon" /> Home
                    </Link>
                </div>
                <div className="link">
                    <Link to="/interface" className="navLink">
                        <img src="cube.png" alt="Interface icon" /> Interface
                    </Link>
                </div>
                <div className="link">
                    <Link to="/components" className="navLink">
                        <img src="folder.png" alt="Components icon" /> Components
                    </Link>
                </div>
                <div className="link">
                    <Link to="/pages" className="navLink">
                        <img src="file.png" alt="Pages icon" /> Pages
                    </Link>
                </div>
                <div className="link">
                    <Link to="/forms" className="navLink">
                        <img src="form.png" alt="Forms icon" /> Forms
                    </Link>
                </div>
                <div className="link">
                    <Link to="/gallery" className="navLink">
                        <img src="gallery.png" alt="Gallery icon" /> Gallery
                    </Link>
                </div>
                <div className="link">
                    <Link to="/documentation" className="navLink">
                        <img src="file.png" alt="Documentation icon" /> Documentation
                    </Link>
                </div>
            </ul> 
        </div>
    );
};

export default Navigation;
