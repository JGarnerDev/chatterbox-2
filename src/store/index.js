import React from "react";
import io from "socket.io-client";

import rootReducer from "./reducer";

// Higher order component to wrap our App child components in, providing all components with a memory
//   Advantages:
//      - No props drilling
//      - State is global; child components can affect change values used by parents

// Initialization of the context provider, which will be used as a JSX element
export const CTX = React.createContext();

// We need an initial state for our reducer, values dependent on what we want on arrival to site

const initialState = {
  Chatroom1: [
    { from: "User1", message: "Message goes right here" },
    { from: "User1", message: "Message goes right here" },
    { from: "User1", message: "Message goes right here" },
  ],
  Chatroom2: [
    { from: "User2", message: "Other messages go here" },
    { from: "User2", message: "Other messages go here" },
    { from: "User2", message: "Other messages go here" },
  ],
};

// We declare socket outside to prevent it being recreated...
let socket;

function sendMessage(message) {
  socket.emit("message", message);
}

export default function Store({ children }) {
  // ...if it hasn't been defined yet, do
  if (!socket) {
    socket = io(":5000");
  }
  // This reducer is the React Hooks implementation - There are other recommended ways of doing this, such as React-Redux
  // What we're doing here is essentially mapStateToProps and mapDispatchToProps
  const [chatRooms] = React.useReducer(rootReducer, initialState);
  // children is props.children, which will be App and all components within
  return (
    <CTX.Provider value={{ chatRooms, sendMessage }}>{children}</CTX.Provider>
  );
}
