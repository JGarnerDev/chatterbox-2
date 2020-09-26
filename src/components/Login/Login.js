import React, { useState } from "react";

import { CTX } from "../../store";

export default function Login() {
  const { chat, newUser } = React.useContext(CTX);
  const [userName, setUsername] = useState(undefined);
  return (
    <div>
      <h1>Hey, pick a name!</h1>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <button
        onClick={() => {
          newUser(userName);
        }}
      >
        Get in there!
      </button>
    </div>
  );
}
