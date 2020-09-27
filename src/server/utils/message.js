const moment = require("moment");

function messageTemplate(user, message) {
  return {
    user,
    message,
    time: moment().format("h:mm a"),
  };
}

module.exports = messageTemplate;
