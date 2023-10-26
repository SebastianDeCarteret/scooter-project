const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  let scooterApp;

  beforeEach(() => {
    scooterApp = new ScooterApp();
  });

  it("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
  it("should add new user to registeredUsers", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(scooterApp.registeredUsers).toEqual({ "Joe Bloggs": response });
  });
  // it("should throw error of already registered");
});

// log in

// log out

// rent scooter

// dock scooter
