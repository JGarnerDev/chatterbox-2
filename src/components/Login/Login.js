import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Paper, TextField, Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import { CTX } from "../../store";

export default function Login() {
  const { newUser } = React.useContext(CTX);
  const [userName, setUsername] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 3000);
    }
  }, [error]);

  async function isValid(userName) {
    if (!userName) {
      setError({ type: "No Name", message: "You have to pick a name!" });
      return;
    }
    const currentUsers = await axios
      .get("http://localhost:3001/currentusers")
      .then((res) => {
        return res.data;
      });

    const isUnique = (await currentUsers.indexOf(userName)) === -1;
    if (!isUnique) {
      setError({
        type: "Name isn't unique",
        message: "Someone picked that name already!",
      });
      return;
    }

    newUser(userName);
  }

  return (
    <Container id="Login">
      <Paper id="login-wrapper">
        <div id="login-form">
          <TextField
            label="Pick a name!"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Button
            onClick={async () => {
              await isValid(userName);
            }}
            variant="outlined"
            size="large"
            id="form-button"
          >
            Get in there!
          </Button>
        </div>
        <div id="login-feedback">
          {error ? (
            <Alert severity="error" id="error">
              <AlertTitle id="error-title">{error.type}</AlertTitle>
              {error.message}
            </Alert>
          ) : null}
        </div>
      </Paper>
    </Container>
  );
}
