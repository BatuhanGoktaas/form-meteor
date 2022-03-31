import { Routes, Route } from "react-router-dom";
import LoginPage from "../ui/pages/LoginPage";
import React from "react";
import RegisterPage from "../ui/pages/RegisterPage";
import {Home} from "../ui/pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default Router;
