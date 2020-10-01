var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3001;

const { getUser, removeUser, addUser, users } = require("./utils/users");

io.on("connection", (socket) => {
  // When a user joins, we add them to the current list of users
  socket.on("join", ({ name }) => {
    addUser({ id: socket.id, name });
  });
  // When they post a message, it is emitted
  socket.on("message", (message) => {
    io.emit("message", message);
  });
  socket.on("disconnect", () => {
    const user = getUser(socket.id);
    io.emit("disconnect", user);
    removeUser(socket.id);
  });
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/currentusers", (req, res, next) => {
  const userNames = users.map((user) => user.name);
  res.send(userNames);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
http.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

//  For testing
// module.exports = { app, http, io, bodyParser };
