import React from "react";

export default function RoomList({ rooms, setActiveRoom }) {
  return rooms
    ? rooms.map((chatRoom, i) => {
        return (
          <div
            onClick={(e) => {
              setActiveRoom(e.target.innerText);
            }}
            key={i}
          >
            {chatRoom}
          </div>
        );
      })
    : null;
}
