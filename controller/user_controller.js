let database = require("../database");

let getUserByInfo = (email, password) => {
    foundUser = database.find(function (user) {
        if (user.email == email && user.password == password) {
            return user;
        };
    });
};

let getUserById = (id) => {
    foundUser = database.find(function (user) {
        if (user.id == id) {
            return user;
        };
    });
};

module.exports = { getUserByInfo, getUserById };