import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Layout/Navbar";
import Work from "./Work.json";
import Footer from "./components/Layout/Footer"; 
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import CV from "./components/pages/CV";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <Router>
      <div className="flex-container">
        <div className="container">
          <Navbar />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects work={Work} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/CV" element={<CV />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;