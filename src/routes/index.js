import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { CTX } from "../store";

import ProtectedRoute from "./protected.route";

import Login from "../components/Login/Login";
import Chat from "../components/Chat/Chat";

const Routes = () => {
  const { chat } = React.useContext(CTX);
  let user = chat.user;
  return (
    <Switch>
      {/* Open Routes  */}
      <Route path="/" exact component={Login} />
      {/* Private Routes */}
      <ProtectedRoute path="/chat" exact component={Chat} user={user} />

      {/* reroutes any address that the above don't match with, and sends them to the home page */}
      <Route path="*" render={() => <Redirect to="/chat" />} />
    </Switch>
  );
};

export default Routes;
