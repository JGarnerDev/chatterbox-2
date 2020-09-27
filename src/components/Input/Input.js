import React, { useState } from "react";

export default function Input({ user, sendMessage, activeRoom }) {
  const [newMessage, setNewMessage] = useState("");

  return (
    <div id="Input">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        onClick={() => {
          sendMessage(user, newMessage, activeRoom);
          setNewMessage("");
        }}
      >
        Fucking click me
      </button>
    </div>
  );
}
