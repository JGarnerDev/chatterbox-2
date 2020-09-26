import React, { useState } from "react";

import { CTX } from "../../store";

export default function Navbar({ activeRoom }) {
  return (
    <nav>
      <h1>{activeRoom}</h1>
    </nav>
  );
}
