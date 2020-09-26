import React from "react";

import Store from "./store";

import Chat from "./components/Chat";

export default function App() {
  return (
    <div id="App">
      <Store>
        <Chat />
      </Store>
    </div>
  );
}
