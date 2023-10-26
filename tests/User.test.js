const User = require("../src/User");

const user = new User("Joe Bloggs", "test123", 21);

describe("User property tests", () => {
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  });
  test("password should be a string", () => {
    expect(typeof user.password).toBe("string");
  });
  test("age should be a number", () => {
    expect(typeof user.age).toBe("number");
  });
  test("logged in should be a boolean", () => {
    expect(typeof user.loggedIn).toBe("boolean");
  });
});
describe("user method tests", () => {
  test("login should update boolean", () => {
    user.login("test123");
    expect(user.loggedIn).toBe(true);
  });
  test("login should throw error if incorrect password", () => {
    expect(() => {
      user.login("tes");
    }).toThrow(new Error("incorrect password"));
  });
  test("logout updates boolean", () => {
    user.logout();
    expect(user.loggedIn).toBe(false);
  });
});
// test password

// test age

// test login

// test logout
