import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AdminLogin from "./AdminLogin";
import ListOfCandidates from "./ListOfCandidates";
import Register from "./Register";

export const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/listofcandidates" element={<ListOfCandidates />} />
      </Routes>
    </>
  );
};
