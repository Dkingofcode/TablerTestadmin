//import React from 'react';
import Logo from "../../ui/Logo.jsx";
import HeaderInfo from "../../ui/HeaderInfo";
import "./header.modules.css";


const Header = () => {
  return (
    <div className="header">
      <Logo  />

      <HeaderInfo />

      
    </div>
  )
}

export default Header;