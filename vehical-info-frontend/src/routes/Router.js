import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import VehicleImages from "../pages/VehicleImages";
import VehicleDetails from "../pages/VehicleDetails";
import Login from "../pages/Login";
import OwnerRegistration from "../pages/OwnerRegistration";
import UserRegistration from "../pages/UserRegistration";
import VehicleRegistration from "../pages/VehicleRegistration"


const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" element={<Login />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vehicle-details" element={<VehicleDetails />} />
      <Route path="/vehicle-images" element={<VehicleImages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/owner-registration" element={<OwnerRegistration />} />
      <Route path="/user-registration" element={<UserRegistration />} /> 
      <Route path="/vehicle-registration" element={<VehicleRegistration />} /> 
    </Routes>
  );
};

export default Router;
