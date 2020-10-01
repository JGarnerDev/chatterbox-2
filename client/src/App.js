import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Provider from "./store";
import Routes from "./routes";

import "./styles/main.scss";

export default function App() {
  return (
    <div id="App">
      <div id="waves" />
      <Provider>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}
