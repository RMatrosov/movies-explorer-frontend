import React from "react";
import {Navigate} from "react-router-dom";
import {Context} from "../context/Context";

const ProtectedRoute = ({children}) => {

  const context = React.useContext(Context);

  return (
      context.loggedIn ? children : <Navigate to="/"/>
  );
};

export default ProtectedRoute;
