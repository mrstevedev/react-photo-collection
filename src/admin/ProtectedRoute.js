import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      { ...rest }
      render={(props) =>  
       (
          <Redirect to="/admin" />
        )
      }
    />
  );
};
export default ProtectedRoute;