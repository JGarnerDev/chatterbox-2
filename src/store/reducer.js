// This chat application is fairly simple, so state will only contain values per each room, consisting of room name and array of messages

export default function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      const name = action.payload;
      return {
        ...state,
        user: name,
      };
    case "NEW_MESSAGE":
      const { user, message, room } = action.payload;
      let roomMessages = state.rooms[room];
      return {
        // return the previous state
        ...state,
        rooms: {
          ...state.rooms,
          [room]: [
            // ...return all previous messages held in the room...
            ...roomMessages,
            // ...add the new message
            { user, message },
          ],
        },
      };
    default:
      // Preserve the state in every other case
      return state;
  }
}
