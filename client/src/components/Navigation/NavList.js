import React from "react";

import { CTX } from "../../store";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Mail, ExitToApp } from "@material-ui/icons";

export default function NavList({ setOpenDrawer, setActiveRoom }) {
  const { chat } = React.useContext(CTX);
  const roomNames = Object.keys(chat.rooms);
  return (
    <List>
      {roomNames
        ? roomNames.map((room, i) => {
            return (
              <ListItem
                onClick={() => {
                  setOpenDrawer(false);
                  setActiveRoom(room);
                }}
                key={i}
              >
                <ListItemIcon>
                  <Mail />
                </ListItemIcon>
                <ListItemText primary={room} />
              </ListItem>
            );
          })
        : null}
      <hr />
      <ListItem
        onClick={() => {
          window.location.reload();
        }}
      >
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>

        <ListItemText primary={"Logout"} />
      </ListItem>
    </List>
  );
}
