import React, { useState } from "react";

import NavList from "./NavList";

import { Drawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const navListItems = ["Ass", "Butt"];

export default function NavDrawer({ setActiveRoom }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Menu onClick={() => setOpenDrawer(true)} id="button" />

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <NavList
          items={navListItems}
          setOpenDrawer={setOpenDrawer}
          setActiveRoom={setActiveRoom}
        />
      </Drawer>
    </React.Fragment>
  );
}
