import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/homepage/HomePage";

interface ApprouteProps {}

export const Approute: React.FC<ApprouteProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};