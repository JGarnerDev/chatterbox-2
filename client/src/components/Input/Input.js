import React, { useState, useEffect } from "react";

import { Fab } from "@material-ui/core";
import NavigationIcon from "@material-ui/icons/Navigation";

export default function Input({ user, sendMessage, activeRoom }) {
  const [newMessage, setNewMessage] = useState("");

  let toggleSpin;
  newMessage ? (toggleSpin = "-spin") : (toggleSpin = "");

  return (
    <div id="Input">
      <textarea
        type="text"
        variant="filled"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            sendMessage(user, newMessage, activeRoom);
            setNewMessage("");
          }
        }}
        id="Input-textfield"
      />

      <Fab
        aria-label="add"
        size="small"
        onClick={() => {
          sendMessage(user, newMessage, activeRoom);
          setNewMessage("");
        }}
        id={`Input-sendbutton${toggleSpin}`}
      >
        <NavigationIcon />
      </Fab>
    </div>
  );
}
