import React from "react";

import { CTX } from "../../store";

export default function Message({ messageFrom, message }) {
  const { user } = React.useContext(CTX);

  return messageFrom === user ? (
    <div>
      <h1>{messageFrom}</h1>
      <h1>{message}</h1>
    </div>
  ) : (
    <div>
      <h1>{message}</h1>
      <h1>{messageFrom}</h1>
    </div>
  );
}
