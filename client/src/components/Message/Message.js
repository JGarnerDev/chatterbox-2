import React from "react";

import { CTX } from "../../store";

import { AccountCircle } from "@material-ui/icons";

export default function Message({ messageFrom, message }) {
  const { chat } = React.useContext(CTX);

  const currentUser = messageFrom === chat.user;

  if (messageFrom.length > 25) {
    messageFrom = messageFrom.slice(0, 25) + "...";
  }

  return currentUser ? (
    <div className="Message currentUser">
      <p>{message}</p>
      <h3>
        <AccountCircle className="Message-userIcon" />
        {messageFrom}
      </h3>
    </div>
  ) : (
    <div className="Message">
      <p>{message}</p>
      <h3>
        <AccountCircle className="Message-userIcon" />
        {messageFrom}
      </h3>
    </div>
  );
}
