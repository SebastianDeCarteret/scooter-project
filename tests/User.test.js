const User = require("../src/User");

describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("Joe Bloggs", "test123", 21);
  });
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
    describe("login() method:", () => {
      it("login should update boolean", () => {
        user.login("test123");
        expect(user.loggedIn).toBe(true);
      });
      it("login should throw error if incorrect password", () => {
        expect(() => {
          user.login("tes");
        }).toThrow(new Error("incorrect password"));
      });
    });

    describe("logout() method:", () => {
      it("should logout updates boolean", () => {
        user.logout();
        expect(user.loggedIn).toBe(false);
      });
    });
  });
});
