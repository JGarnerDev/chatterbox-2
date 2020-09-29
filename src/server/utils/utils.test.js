import messageTemplate from "./message";
import { getUser, removeUser, addUser, users } from "./users";

const cryptoRandomString = require("crypto-random-string");
const moment = require("moment");

describe("Utility functions", () => {
  describe("Sanity tests", () => {
    //   Making sure that these utility functions exist
    it("has a module for the getUser function", () => {
      expect(messageTemplate).toBeDefined;
    });
    it("has a module for the getUser function", () => {
      expect(getUser).toBeDefined;
    });
    it("has a module for the removeUser function", () => {
      expect(removeUser).toBeDefined;
    });
    it("has a module for the addUser function", () => {
      expect(addUser).toBeDefined;
    });
    it("has a module for the addUser function", () => {
      expect(users).toBeDefined;
    });
  });
  describe("messageTemplate", () => {
    it("Throws an error if either the user or message arguments are missing", () => {
      const user = "George";
      const message = "Hello";

      expect(() => {
        messageTemplate();
      }).toThrow();
      expect(() => {
        messageTemplate(user);
      }).toThrow();
      expect(() => {
        messageTemplate(message);
      }).toThrow();
      expect(() => {
        messageTemplate(undefined, message);
      }).toThrow();
      expect(() => {
        messageTemplate(user, undefined);
      }).toThrow();
    });
    it("Only accepts strings as user and message arguments", () => {
      // Generate a random number between 1 and 100
      const randomInt = Math.round(Math.random() * 99) + 1;

      //   Use crypto-random-string module to make a ascii string of length(random number), assigning them to user and message
      const acceptableUser = cryptoRandomString({
        length: randomInt,
        type: "ascii-printable",
      });
      const acceptableMessage = cryptoRandomString({
        length: randomInt,
        type: "ascii-printable",
      });

      //   List bad arguments in an array
      const badArgs = ["", null, undefined, NaN, [], {}, jest.fn()];

      //   Iterate through bad arguments, expecting each to make messageTemplate throw and error when used in either parameter
      badArgs.forEach((badArg) => {
        expect(() => {
          messageTemplate(badArg, acceptableMessage);
        }).toThrow();
        expect(() => {
          messageTemplate(acceptableUser, badArg);
        }).toThrow();
      });
    });

    it("Returns a formatted message object in the form of {message, user, time} when user and message strings are provided", () => {
      // Generate a random number between 1 and 100
      const randomInt = Math.round(Math.random() * 99) + 1;

      //   Use crypto-random-string module to make a ascii string of length(random number), assigning them to user and message
      const acceptableUser = cryptoRandomString({
        length: randomInt,
        type: "ascii-printable",
      });
      const acceptableMessage = cryptoRandomString({
        length: randomInt,
        type: "ascii-printable",
      });

      const currentTime = moment().format("h:mm a");
      const actual = messageTemplate(acceptableUser, acceptableMessage);

      //   Expecting no mutations of values, and that the time is that of the function running
      expect(actual.user).toBe(acceptableUser);
      expect(actual.message).toBe(acceptableMessage);
      expect(actual.time).toBe(currentTime);
    });
  });
});
