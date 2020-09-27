import React, { useState } from "react";
import axios from "axios";

import { CTX } from "../../store";

export default function Login() {
  const { newUser } = React.useContext(CTX);
  const [userName, setUsername] = useState(undefined);
  const [error, setError] = useState("");

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
        <div id="login-form">
          <h1>Hey, pick a name!</h1>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <button
            onClick={async () => {
              (await isUnique(userName))
                ? newUser(userName)
                : setError("Sorry, someone already has that name!");
            }}
          >
            Get in there!
          </button>
        </div>
        <div>{error ? <div id="error">{error}</div> : null}</div>
      </div>
    </div>
  );
}
