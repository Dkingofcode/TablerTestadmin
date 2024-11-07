//import React from 'react';
import StatCard from "../../ui/StatCard.jsx";
import "./stats.modules.css"; 

const Stats = () => {
  return (
    <div className="stats">
       <StatCard num={"43"} text={"New Tickets"} rate={"+6"} color={"green"} /> 
       <StatCard num={"17"} text={"Closed Today"} rate={"-3"} color={"red"} /> 
       <StatCard num={"7"} text={"New Replies"} rate={"+9"} color={"green"} /> 
       <StatCard num={"27.3k"} text={"Followers"} rate={"+3"} color={"green"} /> 
       <StatCard num={"$95"} text={"Daily earnings"} rate={"-2"} color={"red"} /> 
       <StatCard num={"621"} text={"Products"} rate={"-1"} color={"red"} /> 
    </div>
  )
}

export default Stats;