import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import SellCar from "../pages/SellCar";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import LoginAndRegister from "../pages/LoginAndRegister";
import OwnerRegistration from "../pages/OwnerRegistration";
import UserRegistration from "../pages/UserRegistration";


const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/loginandregister" element={<LoginAndRegister />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/settings" element={<Registration />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/loginandregister" element={<LoginAndRegister />} />
      <Route path="/ownerregistration" element={<OwnerRegistration />} />
      <Route path="/userregistration" element={<UserRegistration />} /> */}
    </Routes>
  );
};

export default Router;
