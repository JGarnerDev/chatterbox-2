import React from "react";

import Message from "./Message";

export default function Messages({ messages }) {
  return (
    <div id="Messages">
      {messages
        ? messages.map(({ user, message }, i) => {
            return <Message messageFrom={user} message={message} key={i} />;
          })
        : null}
    </div>
  );
}
