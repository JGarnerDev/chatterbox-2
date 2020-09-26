var express = require("express");

var app = express();

var server = app.listen(5000, () => {
  console.log("Server up");
});

var io = require("socket.io").listen(server);

io.on("connection", (socket) => {
  socket.on("message", (message) => {});
});
