import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import VehicleImages from "../pages/VehicleImages";
import VehicleDetails from "../pages/VehicleDetails";
import Login from "../pages/Login";
import Owner from "../pages/Owner";
import Type_of_Business from "../pages/Type_of_Business";
import VehicleImage from "../pages/VehicleImage";
import UserRegistration from "../pages/UserRegistration";
import VehicleRegistration from "../pages/VehicleRegistration"
import VehicleType from "../pages/VehicleType";


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
      <Route path="/owner" element={<Owner />} />
      <Route path="/type_of_business" element={<Type_of_Business/>}/>
      <Route path="/vehicle_image" element={<VehicleImage/>} />
      <Route path="/vehicle_type" element={<VehicleType/>}/>
      <Route path="/user-registration" element={<UserRegistration />} /> 
      <Route path="/vehicle-registration" element={<VehicleRegistration />} /> 
    </Routes>
  );
};

export default Router;