var io_client = require("socket.io-client"),
  io_server = require("socket.io").listen(3001);

describe.skip("Socket.io/socket.io-client intergration", function () {
  var socket;

  beforeEach(function (done) {
    socket = io_client.connect("http://localhost:3001", {
      "reconnection delay": 0,
      "reopen delay": 0,
      "force new connection": true,
      transports: ["websocket"],
    });

    const username = "Test";

    socket.on("connect", () => {
      done();
    });

    socket.on("disconnect", () => {});
  });

  afterEach((done) => {
    if (socket.connected) {
      socket.disconnect();
    }
    io_server.close();
    done();
  });

  it("should allow for the sending and receiving of messages", (done) => {
    // once connected, emit Hello World
    io_server.emit("message", "Hello");

    socket.once("message", (message) => {
      // Check that the message matches
      expect(message).toEqual("Hello");
      done();
    });
  });
});
