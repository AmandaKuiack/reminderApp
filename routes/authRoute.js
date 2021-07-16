const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");
let database = require("../database");
const router = express.Router();

//Login
router.get("/login", forwardAuthenticated, (req, res) => res.render("auth/login"));
router.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/reminders",
        failureRedirect: "login",
    })
);

//Register
router.get("/register", forwardAuthenticated, (req, res) => res.render("auth/register"));
router.post("/register", (req, res) => {
    try {
        database.push({
            id: database.length +1,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: 'user',
            reminders: [],
        })
        res.redirect("login");
    } catch {
        res.redirect("register");
      };
    });

//Logout
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("login");
});

module.exports = router;