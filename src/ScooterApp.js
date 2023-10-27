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
    if (this.registeredUsers[username]) {
      this.registeredUsers[username].login(password);
      console.log("user has been logged in");
    } else {
      throw new Error("Username or password is incorrect");
    }
  }

  logoutUser(username) {
    if (this.registeredUsers[username]) {
      this.registeredUsers[username].logout();
    } else {
      throw new Error("No such user is logged in");
    }
  }

  createScooter(station) {
    if (this.stations[station]) {
      console.log("created new scooter");
      let index = this.stations[station].push(new Scooter(station)) - 1; // push returns length of [], then -1 to get index
      return this.stations[station][index];
    } else {
      throw new Error("No such station");
    }
  }

  // static getRandomStation() {
  //   console.log(Object.keys(this.stations)[1]);
  //   return Object.keys(this.stations)[0];
  // }
}

module.exports = ScooterApp;
