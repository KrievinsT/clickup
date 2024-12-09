import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';  
import Features from './components/Features';      
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog'

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/blog"  element={<Blog/>} />
      </Routes>
    </Router>
  );
}

export default App;
