import React, { useState } from "react";

export default function Input({ sendMessage }) {
  const [newMessage, setNewMessage] = useState("");
  return (
    <div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        onClick={() => {
          sendMessage(newMessage);
        }}
      >
        Fucking click me
      </button>
    </div>
  );
}
