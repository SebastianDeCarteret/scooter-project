const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  stations = { templeMeads: null, stNicks: null, castlePark: null };
  registeredUsers = {};
  registerUser(username, password, age) {
    if (!Object.keys().includes(username) && age >= 18) {
      this.registeredUsers[username] = new User(username, password, age);
      console.log(`${this.username} has been registered`);
    } else if (Object.keys().includes(username)) {
      throw new Error("already registered");
    } else {
      throw new Error("too young to register");
    }
  }
  // static getRandomStation() {
  //   console.log(Object.keys(this.stations)[1]);
  //   return Object.keys(this.stations)[0];
  // }
}

module.exports = ScooterApp;
