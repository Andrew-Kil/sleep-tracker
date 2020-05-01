const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");
const { db } = require("../db");
const options = { usernameField: "email", passwordField: "password" };

passport.use(
  new LocalStrategy(options, (email, password, done) => {
    db.one("SELECT * FROM users WHERE email = ${email}", { email })
      .then((user) => {
        if (!helpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          const { id, name, email } = user;
          return done(null, { id, name, email });
        }
      })
      .catch((err) => {
        console.log(err);
        return done(err);
      });
  })
);

init();

module.exports = passport;
