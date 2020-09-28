import React, { useEffect, useRef } from "react";

import Message from "./Message";

export default function Messages({ messages }) {
  const messagesBottomRef = useRef(null);
  const scrollToBottom = () => {
    console.log(messagesBottomRef.current);
    messagesBottomRef.current.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div id="Messages">
      {messages
        ? messages.map(({ user, message }, i) => {
            return <Message messageFrom={user} message={message} key={i} />;
          })
        : null}
      <div ref={messagesBottomRef}></div>
    </div>
  );
}
