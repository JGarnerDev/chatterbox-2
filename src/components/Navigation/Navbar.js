import React from "react";

import { Toolbar } from "@material-ui/core";

import NavDrawer from "./NavDrawer";

export default function Navbar({ activeRoom, setActiveRoom }) {
  return (
    <Toolbar id="Navbar">
      <h2 id="Navbar-roomName">{activeRoom}</h2>
      <NavDrawer setActiveRoom={setActiveRoom} />
    </Toolbar>
  );
}
