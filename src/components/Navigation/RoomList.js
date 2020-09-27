import React from "react";

export default function RoomList({ rooms, setActiveRoom }) {
  return rooms ? (
    <div id="RoomList">
      {rooms.map((chatRoom, i) => {
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
      })}
    </div>
  ) : (
    <div id="RoomList"></div>
  );
}
