const moment = require("moment");

function messageTemplate(user, message) {
  if (
    typeof user !== "string" ||
    typeof message !== "string" ||
    message.length === 0 ||
    user.length === 0
  ) {
    throw new Error("Incomplete message");
  }

  return {
    user,
    message,
    time: moment().format("h:mm a"),
  };
}

module.exports = messageTemplate;
