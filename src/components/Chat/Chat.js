import React, { useState } from "react";

import { CTX } from "../../store";

import Navbar from "../Navigation/Navbar";
import RoomList from "../Navigation/RoomList";
import Messages from "../Message/Messages";
import Input from "../Input/Input";

export default function Chat() {
  // Reaching into store memory for our chatRooms and the sendMessage action creator
  const { chat, sendMessage } = React.useContext(CTX);
  const user = chat.user;

  // Because chatRooms are objects, the chat room names will be the object keys
  const roomNames = Object.keys(chat.rooms);
  // We need a way to indicate and handle what current room the user is in, default value will be the first room established in the initialState of store (../store/index.js)
  const [activeRoom, setActiveRoom] = useState(roomNames[0]);
  return (
    <div>
      <Navbar activeRoom={activeRoom} />
      <RoomList rooms={roomNames} setActiveRoom={setActiveRoom} />
      <Messages messages={chat.rooms[activeRoom]} />
      <Input sendMessage={sendMessage} user={user} activeRoom={activeRoom} />
    </div>
  );
}
