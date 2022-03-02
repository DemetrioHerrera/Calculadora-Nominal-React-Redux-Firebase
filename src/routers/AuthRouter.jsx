import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const LoginScreen = lazy(() => import("../pages/LoginScreen"));
const RegisterScreen = lazy(() => import("../pages/RegisterScreen"));

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
