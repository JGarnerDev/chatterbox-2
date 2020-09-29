import messageTemplate from "./message";
import { getUser, removeUser, addUser, users } from "./users";

const cryptoRandomString = require("crypto-random-string");
const moment = require("moment");

describe("Utility functions", () => {
  describe.skip("Sanity tests", () => {
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
  describe.skip("messageTemplate", () => {
    // Desired outcome:
    // messageTemplate(), given arguments 'message' (string) and 'user' (string), returns an object {message, user, time: [CURRENT TIME]}

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
  describe("User utility functions", () => {
    // Generate a random number between 1 and 100
    const randomInt = Math.round(Math.random() * 99) + 1;

    //   Use crypto-random-string module to make a ascii string of length(random number), assigning them to id and user
    const acceptableString = () =>
      cryptoRandomString({
        length: randomInt,
        type: "ascii-printable",
      });

    //   Push three new user objects with random values into the users array
    for (let i = 0; i <= 3; i++) {
      users.push({ id: acceptableString(), user: acceptableString() });
    }

    describe.skip("getUser", () => {
      // Desired outcome:
      // getUser(id) should return a user from the users array that has the id of the one given as an argument

      it("throws an error when no argument is passed", () => {
        expect(() => {
          getUser();
        }).toThrow();
      });

      it("throws and error when argument is not a socket.id (string)", () => {
        //   List bad arguments in an array
        const badArgs = ["", 1, null, undefined, NaN, [], {}, jest.fn()];

        //   Iterate through bad arguments, expecting each to make messageTemplate throw and error when used in either parameter
        badArgs.forEach((badArg) => {
          expect(() => {
            getUser(badArg);
          }).toThrow();
        });
      });

      it("returns the user with the id given as an argument", () => {
        // Picking a random existing index of the users array
        const indexOfUser = ~~(Math.random() * users.length);
        // Retaining the object we know to be at that index
        const expectedUser = users[indexOfUser];
        // Calling getUser with it's id
        const actualUser = getUser(expectedUser.id);
        // Expect them to be equal
        expect(actualUser).toEqual(expectedUser);
      });
    });
    describe.skip("removeUser", () => {
      // Desired outcome:
      // removeUser(id) should return a user from the users array that has the id of the one given as an argument, as well as remove this user from the users array

      it("throws an error when no argument is passed", () => {
        expect(() => {
          removeUser();
        }).toThrow();
      });

      it("throws and error when argument is not a socket.id (string)", () => {
        //   List bad arguments in an array
        const badArgs = ["", 1, null, undefined, NaN, [], {}, jest.fn()];

        //   Iterate through bad arguments, expecting each to make messageTemplate throw and error when used in either parameter
        badArgs.forEach((badArg) => {
          expect(() => {
            removeUser(badArg);
          }).toThrow();
        });
      });

      it("returns the user with the id given as an argument, and the user is no longer contained by users array", () => {
        // Picking a random existing index of the users array
        const indexOfUser = ~~(Math.random() * users.length);
        // Retaining the object we know to be at that index
        const expectedUser = users[indexOfUser];
        // Calling removeUser with it's id
        const actualUser = removeUser(expectedUser.id);
        // Expect them to be equal
        expect(actualUser).toEqual(expectedUser);
        // Expect the array to not contain the user
        expect(users).not.toContain(actualUser);
      });
    });
    describe("addUser", () => {
      // Desired outcome:
      // addUser(user) should return a user the user information, as well as add this user to the users array

      it("throws an error when no argument is passed", () => {
        expect(() => {
          addUser();
        }).toThrow();
      });

      it("throws and error when arguments are not strings with >0 length", () => {
        const acceptableId = acceptableString();
        const acceptableName = acceptableString();
        //   List bad arguments in an array
        const badArgs = ["", 1, null, undefined, NaN, [], {}, jest.fn()];

        //   Iterate through bad arguments, expecting each to make addUser throw and error when used in either parameter
        badArgs.forEach((badArg) => {
          expect(() => {
            addUser(badArg);
          }).toThrow();
          expect(() => {
            addUser(acceptableId, badArg);
          }).toThrow();
          expect(() => {
            addUser(badArg, acceptableName);
          }).toThrow();
          expect(() => {
            addUser(badArg, badArg);
          }).toThrow();
        });
      });

      it("given an id (string) and a name (string), returns the information and adds the user to the array", () => {
        //   assign acceptable values
        const acceptableId = acceptableString();
        const acceptableName = acceptableString();
        //   assign a new user object these values
        const newUser = { id: acceptableId, name: acceptableName };
        // retain length of users array
        const oldLength = users.length;
        //   call addUser with the valid user object
        addUser(newUser);
        // expect users array length to be increased by one
        const newLength = users.length;
        expect(newLength).toBe(oldLength + 1);
        // expect this user to exist in users array and to be retrievable
        expect(getUser(newUser.id)).toEqual(newUser);
      });
    });
  });
});
