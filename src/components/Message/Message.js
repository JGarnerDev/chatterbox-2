import React from "react";

export default function Message({ user, message }) {
  return (
    <div>
      <h1>{user}</h1>
      <h1>{message}</h1>
    </div>
  );
}
