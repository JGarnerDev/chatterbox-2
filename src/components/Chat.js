import React, { useState } from "react";

import { CTX } from "../store";

import Messages from "./Messages";
import Input from "./Input";

export default function Chat() {
  // Reaching into store memory for our chatRooms and the sendMessage action creator
  const { chatRooms, sendMessage } = React.useContext(CTX);
  // Because chatRooms are objects, the chat room names will be the object keys
  const roomNames = Object.keys(chatRooms);
  // We need a way to indicate and handle what current room the user is in, default value will be the first room established in the initialState of store (../store/index.js)
  const [activeRoom, setActiveRoom] = useState(roomNames[0]);

  return (
    <div>
      <h1>{activeRoom}</h1>
      {roomNames.map((chatRoom, i) => {
        return (
          <div
            onClick={(e) => {
              setActiveRoom(e.target.innerText);
            }}
            key={i}
          >
            {chatRoom}
          </div>
        );
      })}
      <Messages messages={chatRooms[activeRoom]} />
      <Input sendMessage={sendMessage} />
    </div>
  );
}
