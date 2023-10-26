class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = true;
  }
  login(passwordAttempt) {
    if (passwordAttempt === this.password) {
      this.loggedIn = true;
    } else {
      throw new Error("incorrect password");
    }
  }
  logout() {
    this.loggedIn = false;
  }
}

module.exports = User;
