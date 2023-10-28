import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Patient from "./pages/Patient";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Define the element for the root path */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
