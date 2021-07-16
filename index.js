const express = require("express");
const app = express();
const passport = require("passport");
const session = require('express-session');
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authRoute = require("./routes/authRoute")
const Database = require("./database");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(session({
  secret: 'Dragon Quest 11 is a great game',
  resave: true,
  saveUninitialized: false,

}));
app.use(passport.initialize());
app.use(passport.session());

// Routes start here
app.use("/auth", authRoute);
app.get("/reminders", reminderController.list);

app.get("/reminder/new", reminderController.new);

app.get("/reminder/:id", reminderController.listOne);

app.get("/reminder/:id/edit", reminderController.edit);

app.post("/reminder/", reminderController.create);

// Implement this yourself
app.post("/reminder/update/:id", reminderController.update);

// Implement this yourself
app.post("/reminder/delete/:id", reminderController.delete);



app.listen(3001, function () {
  console.log(
    "Server running. Visit: localhost:3001/reminders in your browser 🚀"
  );
});
