import Header from "./components/header/Header";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Interface from "./Pages/Interface/Interface";
import Components from "./Pages/Components/Components";
import Pages from "./Pages/Pages/Pages";
import Forms from "./Pages/Forms/Forms";
import Gallery from "./Pages/Gallery/Gallery";
import Documentation from "./Pages/Documentation/Documentation";
import "./App.css";

function App() {
  
  return (
    <div className="main">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/components" element={<Components />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </div>
  );
}

export default App;



