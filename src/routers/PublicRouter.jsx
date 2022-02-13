import React from "react";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ isLog, children }) => {
  return isLog ? <Navigate to='/app' /> : children;
};

export default PublicRouter;
