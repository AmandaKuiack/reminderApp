let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render("/login");
  },

  register: (req, res) => {
    res.render("/register");
  },

  loginSubmit: (req, res) => {
    // implement
  },

  registerSubmit: (req, res) => {
    let newUser = {
      id: database.length +1,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: 'user',
      reminders: [],};
    database.push(newUser);
    res.redirect("/login");
  },
};

module.exports = authController;
