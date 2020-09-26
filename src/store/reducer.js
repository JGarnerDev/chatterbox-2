// This chat application is fairly simple, so state will only contain values per each room, consisting of room name and array of messages

export default function reducer(state, action) {
  // The only action creators are for messages, which have the payload of userName, roomName , and messageText
  const { userName, messageText, roomName } = action.payload;
  // The reducer is a switch statement by convention, even though there's just one action creator
  switch (action.type) {
    case "NEW_MESSAGE":
      return {
        // return the previous state
        ...state,
        // In the room specified...
        [roomName]: [
          // ...return all previous messages held in the room...
          ...state[roomName],
          // ...add the new message
          { userName, messageText },
        ],
      };
    default:
      // Preserve the state in every other case
      return state;
  }
}
