import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home_page/pages/Home";
import About from "./About_page/pages/About";
import Project from "./Project_page/pages/Project";
import ProjectDetail from "./Project_page/pages/ProjectDetail"; // 🆕 Import Detail Page
import Blog from "./Blog_page/Blog";
import Services from "./Services_page/pages/Services";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetail />} /> {/* 🆕 Dynamic Route */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
