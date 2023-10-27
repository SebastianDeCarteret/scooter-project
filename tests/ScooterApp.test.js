const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here

// register user
describe("registerUser tests", () => {
  let scooterApp;

  beforeEach(() => {
    scooterApp = new ScooterApp();
  });

  describe("property tests:", () => {
    it("registeredUsers should be type object", () => {
      expect(typeof scooterApp.registeredUsers).toBe("object");
    });
    it("stations should be type object with array values", () => {
      expect(scooterApp.stations).toEqual({
        templeMeads: [],
        stNicks: [],
        castlePark: [],
      });
    });
  });

  describe("method tests:", () => {
    describe("registerUser() tests:", () => {
      it("Should return instance of User", () => {
        let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
        expect(response).toBeInstanceOf(User);
      });
      it("should add new user to registeredUsers", () => {
        let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
        expect(scooterApp.registeredUsers).toEqual({ "Joe Bloggs": response });
      });
      it("should throw error of already registered", () => {
        scooterApp.registerUser("Joe Bloggs", "test123", 21);
        expect(() => {
          scooterApp.registerUser("Joe Bloggs", "test123", 21); // try register same user again
        }).toThrow(new Error("already registered"));
      });
      it("should throw error of too young to register", () => {
        expect(() => {
          scooterApp.registerUser("Joe Bloggs", "test123", 17);
        }).toThrow(new Error("too young to register"));
      });
    });

    describe("loginUser() tests:", () => {
      it("should update loggedIn to true", () => {
        scooterApp.registerUser("Joe Bloggs", "test123", 21);
        scooterApp.loginUser("Joe Bloggs", "test123");
        expect(scooterApp.registeredUsers["Joe Bloggs"].loggedIn).toBe(true);
      });
      it("should throw error username or password is incorrect", () => {
        scooterApp.registerUser("Joe Bloggs", "test123", 21);
        expect(() => {
          scooterApp.loginUser("Jo Blogg", "test321");
        }).toThrow(new Error("Username or password is incorrect"));
      });
    });

    describe("logoutUser() tests:", () => {
      it("should update loggedIn to be false", () => {
        scooterApp.registerUser("Joe Bloggs", "test123", 21);
        scooterApp.logoutUser("Joe Bloggs");
        expect(scooterApp.registeredUsers["Joe Bloggs"].loggedIn).toBe(false);
      });
      it("should throw error of no such user is logged in", () => {
        expect(() => {
          scooterApp.logoutUser("Joe Bloggs");
        }).toThrow(new Error("No such user is logged in"));
      });
    });

    describe("createScooter() tests:", () => {
      it("should create a new instance of Scooter", () => {
        let response = scooterApp.createScooter("templeMeads");
        expect(response).toBeInstanceOf(Scooter);
      });
      it("should add the scooter to the stations object in an array", () => {
        const response = scooterApp.createScooter("templeMeads");
        expect(scooterApp.stations).toEqual({
          templeMeads: [response],
          stNicks: [],
          castlePark: [],
        });
      });
    });
  });
});

// log in

// log out

// rent scooter

// dock scooter
