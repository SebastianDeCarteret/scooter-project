const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  stations = { templeMeads: [], stNicks: [], castlePark: [] };
  registeredUsers = {};

  registerUser(username, password, age) {
    if (!this.registeredUsers[username] && age >= 18) {
      console.log(`${this.username} has been registered`);
      this.registeredUsers[username] = new User(username, password, age);
      return this.registeredUsers[username];
    } else if (this.registeredUsers[username]) {
      throw new Error("already registered");
    } else {
      throw new Error("too young to register");
    }
  }

  loginUser(username, password) {
    if (Object.keys().includes(username)) {
      Object.values()
        .at(Object.keys(this.registeredUsers).indexOf(username))
        .login(password);
    } else {
      throw new Error("Username or password is incorrect");
    }
  }

  logoutUser(username) {
    if (Object.keys().includes(username)) {
      Object.values()
        .at(Object.keys(this.registeredUsers).indexOf(username))
        .logout();
    } else {
      throw new Error("No such user is logged in");
    }
  }

  createScooter(station) {
    if (Object.keys().includes(station)) {
      console.log("created new scooter");
      return Object.keys(this.stations)[station].push(new Scooter(station));
    } else {
      throw new Error("no such station");
    }
  }
  // static getRandomStation() {
  //   console.log(Object.keys(this.stations)[1]);
  //   return Object.keys(this.stations)[0];
  // }
}

module.exports = ScooterApp;
