let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
        let reminderIdToUpdate = parseInt(req.params.id);
        let reminderIndex = reminderIdToUpdate - 1;
    // let idToReplace = database.cindy.find((reminder) => {
    //   if (reminder.id == reminderIdToUpdate) {
    //     return reminder;
    //   };
    // });
    let newReminder = {
      id: reminderIdToUpdate,
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed.includes("checked")
    };
    database.cindy.reminders[reminderIndex] = newReminder;
    res.redirect("/reminders");
  },

  delete: (req, res) => {
    let reminderIdDelete = parseInt(req.params.id) - 1;
    database.cindy.reminders.splice(reminderIdDelete,reminderIdDelete);
    console.log(reminderIdDelete);
    res.redirect("/reminders");
  } 
};

module.exports = remindersController;
