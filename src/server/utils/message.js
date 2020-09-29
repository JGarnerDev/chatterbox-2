const moment = require("moment");

function messageTemplate(user, message) {
  if (
    !message ||
    !user ||
    typeof user !== "string" ||
    typeof message !== "string"
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
