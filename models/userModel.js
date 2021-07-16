const database = require("../database");

const userModel = {
    findOne: (email) => {
        const user = database.find((user) => user.email === email || user.email == email);
        if (user) {
            return user;
        }
        throw new Error(`Unable to find user with email: ${email}`);
    },
    findById: (id) => {
        const user = database.find((user) => user.id === id || user.id == id);
        if (user) {
            return user;
        }
        throw new Error(`Unable to find user with id: &{id}`);
    },
};

module.exports = { userModel };