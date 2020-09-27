import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Store from "./store";
import Routes from "./routes";

import "./styles/main.scss";

export default function App() {
  return (
    <div id="App">
      <div id="waves" />
      <Store>
        <Router>
          <Routes />
        </Router>
      </Store>
    </div>
  );
}
