import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Layout/Navbar";
import Work from "./Work.json";
import MainCard from "./components/MainCard";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

import Skills from "./components/pages/Skills";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
       

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects work={Work} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
      </Router>
      );
}

      export default App;
