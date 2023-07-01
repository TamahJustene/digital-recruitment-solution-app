import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import CandidateSearchPage from './CandidateSearchPage';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/candidate-search" element={<CandidateSearchPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
