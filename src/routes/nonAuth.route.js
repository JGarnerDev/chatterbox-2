import React from "react";
import { Route, Redirect } from "react-router-dom";

const NonAuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return rest.user ? (
          <Redirect
            to={{ pathname: "/chat", state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default NonAuthRoute;
