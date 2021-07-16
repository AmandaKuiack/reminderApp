const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

//Login
router.get("/login", (req, res) => res.render("login"));
router.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/reminders",
        failureRedirect: "/auth/login",
    })
);

//Register
router.get("/register", (req, res) => res.render("register"));
router.post("/register", 
    (req, res) => {
        let newUser = {
          id: database.length +1,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          role: 'user',
          reminders: [],};
        database.push(newUser);
        res.redirect("/auth/login");
      },
);

//Logout
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("auth/login");
})

module.exports = router;