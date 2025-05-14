import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const { currentUser } = useContext(AuthContext);


  if (!currentUser) {
    return <Navigate to={redirectTo} replace />;
  }


  return children ? children : <Outlet />;
};

export default PrivateRoute;
