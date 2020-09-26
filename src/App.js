import React from "react";

import Store from "./store";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

export default function App() {
  return (
    <div id="App">
      <Store>
        <Router>
          <Routes />
        </Router>
      </Store>
    </div>
  );
}
