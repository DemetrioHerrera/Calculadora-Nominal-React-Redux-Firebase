import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ isLog, children }) => {
  return isLog ? children : <Navigate to='/auth/login' />;
};

export default PrivateRouter;
