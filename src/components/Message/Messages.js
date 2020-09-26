import React from "react";

import Message from "./Message";

export default function Messages({ messages }) {
  return (
    <div>
      {messages
        ? messages.map(({ user, message }, i) => {
            return <Message user={user} message={message} key={i} />;
          })
        : null}
    </div>
  );
}
