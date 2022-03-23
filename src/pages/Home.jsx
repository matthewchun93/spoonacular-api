import React from "react";
import { motion } from "framer-motion";

//components
import Popular from "../components/Popular";
import Vegetarian from "../components/Vegetarian";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Vegetarian />
    </motion.div>
  );
};

export default Home;
