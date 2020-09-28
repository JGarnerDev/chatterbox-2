import React from "react";

import { CTX } from "../../store";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Mail, ExitToApp } from "@material-ui/icons";

export default function NavList({ items, setOpenDrawer, setActiveRoom }) {
  const { chat, sendMessage } = React.useContext(CTX);
  const roomNames = Object.keys(chat.rooms);
  return (
    <List>
      {roomNames
        ? roomNames.map((room) => {
            return (
              <ListItem
                onClick={() => {
                  setOpenDrawer(false);
                  setActiveRoom(room);
                }}
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
