import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InquiryForm from './pages/InquiryForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquiry" element={<InquiryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
