import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { FirebaseContext } from "../contexts/FirebaseContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(FirebaseContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
