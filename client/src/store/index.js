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
  user: undefined,
  rooms: { "Main chat": [], "Side chat": [] },
};

let socket;
let user;

// action creators

function sendMessage(user, message, room) {
  if (!message) return;
  socket.emit("message", { user, message, room });
}

export default function Provider({ children }) {
  const [chat, dispatch] = React.useReducer(rootReducer, initialState);

  function newUser(name) {
    dispatch({ type: "LOGIN", payload: name });
    socket.emit("join", { name });
    sendMessage("ChatterBox", `User ${name} has joined!`, "Main chat");
  }

  // if there isn't a socket yet...
  if (!socket) {
    // ...make it, listening on our server
    socket = io("https://jg-chatterbox-server.herokuapp.com/");

    // whenever our socket revieces a 'message' event, dispatch the data attached to the event to our reducer via action creator
    socket.on("message", (message) => {
      dispatch({ type: "NEW_MESSAGE", payload: message });
    });

    socket.on("disconnect", ({ name }) => {
      const user = "ChatterBox";
      const message = `User ${name} has left!`;
      const room = "Main chat";
      const leaveMessage = { user, message, room };
      dispatch({ type: "NEW_MESSAGE", payload: leaveMessage });
    });
  }

  // children is props.children, which will be App and all components within
  return (
    <CTX.Provider value={{ user, chat, newUser, sendMessage }}>
      {children}
    </CTX.Provider>
  );
}
