var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var bodyParser = require("body-parser");
const { getuid } = require("process");
const PORT = 3001;

const {
  getUser,
  getUsersInRoom,
  removeUser,
  addUser,
  users,
} = require("./utils/users");

io.on("connection", (socket) => {
  // When a user joins, we add them to the current list of users
  socket.on("join", ({ name }) => {
    const { err, user } = addUser({ id: socket.id, name });
  });
  // When they post a message, it is emitted
  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", message);
  });
  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
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

http.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
