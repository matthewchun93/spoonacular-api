import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipes from "./Recipes";

const Pages = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:cuisine" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipes />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
