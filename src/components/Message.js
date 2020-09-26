import React from "react";

export default function Message({ from, message }) {
  return (
    <div>
      <h1>{from}</h1>
      <h1>{message}</h1>
    </div>
  );
}
