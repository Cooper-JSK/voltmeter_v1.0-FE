// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Session from './pages/Session';
import SessionsList from './pages/SessionsList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/session/:id" element={<Session />} />
          <Route path="/sessions" element={<SessionsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
