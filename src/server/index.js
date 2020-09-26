var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const PORT = 3001;

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    io.emit("message", message);
  });
});

http.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
