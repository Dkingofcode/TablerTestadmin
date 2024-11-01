import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import Header from "./components/header/Header";
import './App.css';
import Navigation from "./components/Navigation/Navigation.jsx"
import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Interface from "./Pages/Interface/Interface";
import Components from "./Pages/Components/Components";
import Pages from "./Pages/Pages/Pages";
import Forms from "./Pages/Forms/Forms";
import Gallery from "./Pages/Gallery/Gallery";
import Documentation from "./Pages/Documentation/Documentation";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
//import { useState } from "react";
import { Data } from "./utils/Data";


Chart.register(CategoryScale);


function App() {

  
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor:  [
             "rgba(75,192,192,1)",
             "#f3ba2f",
             "#2a71d0"
           ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });


// [
//   "rgba(75,192,192,1)",
//   "&quot;#ecf0f1",
//   "#50AF95",
//   "#f3ba2f",
//   "#2a71d0"
// ],

  // Define color schemes for each chart type

const barColors = ["rgba(0, 123, 255, 1)", "rgba(173, 216, 230, 1)"];


  return (
    <>
      <div className="main">
       <Header  />   
       <Navigation  /> 
        
       
         <Routes>
           <Route path="/" element={<Home chartData={chartData} />} />
           <Route path="/interface" element={<Interface  />} />
           <Route path="/components" element={<Components  />} />
           <Route path="/pages" element={<Pages  />} />
           <Route path="/forms" element={<Forms  />} />
           <Route path="/gallery" element={<Gallery  />} />
           <Route path="/documentation" element={<Documentation  />} />

         </Routes>  
       
      </div>

      
    </>
  )
}

export default App
