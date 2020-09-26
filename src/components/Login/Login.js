import React, { useState } from "react";

import { CTX } from "../../store";

export default function Login() {
  const { chat } = React.useContext(CTX);
  const [userName, setUsername] = useState(undefined);
  return <div></div>;
}
