import { useState } from "react";
import NavBar from "./components/NavBar";
import LandingComponent from "./components/LandingComponent";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Teams from "./pages/Teams";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
function App() {
  // return <Landing />;
  return (
    <Router>
      <NavBar />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
