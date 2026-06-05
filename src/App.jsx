import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InquiryForm from "./pages/InquiryForm";
import StructuredData from "./components/StructuredData";
import SiteEffects from "./components/SiteEffects";

function App() {
  return (
    <Router>
      <StructuredData />
      <SiteEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquiry" element={<InquiryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
