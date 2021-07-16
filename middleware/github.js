require('dotenv').config();
const passport = require("passport");
const GitHubStrategy = require('passport-github').Strategy;
const userController = require("../controller/user_controller");

const githubLogin = new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    let user = userController.getUserByGithubIdOrCreate(profile);
    return cb(null, user);
  },
);

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    let user = userController.getUserById(id);
    if (user) {
        done(null, user);
    } else {
        done({ message: "User not found. Please register for account." }, null);
    }
});


module.exports = passport.use(githubLogin);