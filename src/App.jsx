import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Compopents/Header/Header";
import About from "./Compopents/About/About.js";
import Contact from "./Compopents/Contact/Contact.js";
import Home from "./Compopents/Home/Home.js";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
