import React, { useState } from "react";

import { CTX } from "../../store";

export default function Navbar() {
  // Reaching into store memory for our chatRooms
  const [chat] = React.useContext(CTX);
  // setting the current room header to render the first chat room name by default
  // if we want the first chatroom to change, alter it in the store (../store/index.js) initialState

  const [activeRoom] = useState(chat);

  return (
    <nav>
      <h1>{activeRoom}</h1>
    </nav>
  );
}
