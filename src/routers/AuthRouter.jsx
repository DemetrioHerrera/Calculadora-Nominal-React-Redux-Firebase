import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginScreen />} />
      <Route path='register' element={<RegisterScreen />} />
      <Route index element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default AuthRouter;
