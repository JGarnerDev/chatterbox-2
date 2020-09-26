import React from "react";

import Message from "./Message";

export default function Messages({ messages }) {
  return (
    <div>
      {messages.map(({ from, message }, i) => {
        return <Message from={from} message={message} key={i} />;
      })}
    </div>
  );
}
