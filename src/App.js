import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import DataIntro from './pages/DataIntro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/dataintro" element={<DataIntro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
