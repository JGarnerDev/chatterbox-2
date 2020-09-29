import { app, http, bodyParser } from "./index";
import axios from "axios";

const cryptoRandomString = require("crypto-random-string");

const { addUser, users } = require("./utils/users");

describe.skip("Server tests", () => {
  describe("Sanity tests", () => {
    it("has a module", () => {
      const server = require("./index");
      expect(server).toBeDefined();
    });
  });
  beforeAll(() => {
    const PORT = 5000;

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

    http.listen(PORT, () => {
      console.log(`Server is up on port ${PORT}`);
    });
  });
  afterAll(() => {
    app.close();
    socket.disconnect();
    http.off();
    http.close();
  });
  describe("Server endpoint /currentusers returns the list of current users", () => {
    // Generate a random number between 1 and 100
    const randomInt = Math.round(Math.random() * 99) + 1;

    //   Use crypto-random-string module to make a ascii string of length(random number), assigning them to user and message
    const acceptableString = () => {
      return cryptoRandomString({
        length: randomInt,
        type: "ascii-printable",
      });
    };

    const user1 = { id: acceptableString(), name: acceptableString() };
    const user2 = { id: acceptableString(), name: acceptableString() };
    const user3 = { id: acceptableString(), name: acceptableString() };

    addUser(user1);
    addUser(user2);
    addUser(user3);

    it("returns a list of the names of current users", async (done) => {
      const users = await axios.get("http://localhost:5000/currentusers");
      expect(users.data).toContain(user1.name && user2.name && user3.name);
      expect(users.data.length).toBe(3);
      done();
    });
  });
});
