import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import Home from "./pages/Home"; // Home page
import Gallery from "./pages/Gallery"; // Gallery page
import Shopping from "./pages/shopping"; // Shopping page

import FooterComponent from "./components/footercomponent/footercomponent"; 
import "./App.css";

const App = () => {
  return (
    <Router>
      <HeaderContent />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/gallery" element={<Gallery />} /> {/* Gallery route */}
        <Route path="/shopping" element={<Shopping />} /> {/* Shopping route */}
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
