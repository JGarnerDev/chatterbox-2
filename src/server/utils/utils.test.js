import messageTemplate from "./message";
import { getUser, removeUser, addUser, users } from "./users";

const cryptoRandomString = require("crypto-random-string");
const moment = require("moment");

describe("Utility functions", () => {
  describe.skip("Sanity tests", () => {
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
    it.skip("Throws an error if either the user or message arguments are missing", () => {
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
    it.skip("Only accepts strings as user and message arguments", () => {
      const randomInt = Math.round(Math.random() * 100);
      const acceptableUser = cryptoRandomString({
        length: randomInt,
        type: "ascii-printable",
      });
      const acceptableMessage = cryptoRandomString({
        length: randomInt,
        type: "ascii-printable",
      });

      const badArgs = ["", null, undefined, NaN, [], {}, jest.fn()];

      badArgs.forEach((badArg) => {
        expect(() => {
          messageTemplate(badArg, acceptableMessage);
        }).toThrow();
        expect(() => {
          messageTemplate(acceptableUser, badArg);
        }).toThrow();
      });
    });

    it.skip("Returns a formatted message object in the form of {message, user, time} when user and message strings are provided", () => {
      const randomInt = Math.round(Math.random() * 100);

      const user = cryptoRandomString({
        length: randomInt,
        type: "ascii-printable",
      });
      const message = cryptoRandomString({
        length: randomInt,
        type: "ascii-printable",
      });

      const currentTime = moment().format("h:mm a");
      const actual = messageTemplate(user, message);

      expect(actual.user).toBe(user);
      expect(actual.message).toBe(message);
      expect(actual.time).toBe(currentTime);
    });
  });
});
