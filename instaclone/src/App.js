import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from './LandingPage/Landingpage.js';
import Postview from './PostView/Postview.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="Postview" element={<Postview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
