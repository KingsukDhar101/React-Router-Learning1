import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  let styleObj = {
    backgroundColor: 'orange',
  };
  return (
    <div className="app" style={styleObj}>
      {/* <Home />
      <About />
      <Contact /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
