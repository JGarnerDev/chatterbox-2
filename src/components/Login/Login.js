import React, { useState } from "react";
import axios from "axios";

import { CTX } from "../../store";

export default function Login() {
  const { newUser } = React.useContext(CTX);
  const [userName, setUsername] = useState(undefined);

  async function isUnique(userName) {
    const currentUsers = await axios
      .get("http://localhost:3001/currentusers")
      .then((res) => {
        return res.data;
      });
    return (await currentUsers.indexOf(userName)) === -1 ? true : false;
  }

  return (
    <div id="Login">
      <div id="login-wrapper">
        <h1>Hey, pick a name!</h1>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button
          onClick={async () => {
            (await isUnique(userName)) ? newUser(userName) : console.log("No");
          }}
        >
          Get in there!
        </button>
      </div>
    </div>
  );
}
