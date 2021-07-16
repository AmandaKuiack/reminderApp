const database = require("../models/userModel").database;
const userModel = require("../models/userModel").userModel;

const getUserByInfo = (email, password) => {
    let user = userModel.findOne(email);
    if (user) {
        if (isUserValid(user, password)) {
            return user;
        }
    }
    return null;
};

const getUserById = (id) => {
    let user = userModel.findById(id);
    if (user) {
        return user;
    }
    return null;
};
function isUserValid(user, password) {
    return user.password == password;
}

module.exports = { getUserByInfo, getUserById };