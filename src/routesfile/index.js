// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../layouts/auth/index";

const RoutesComponent = () => {
  console.log("test route");
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
