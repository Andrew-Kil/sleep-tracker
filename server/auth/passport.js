const passport = require("passport");
const { db } = require("../db");

module.exports = () => {
  passport.serializeUser((user, done) => done(null, user.email));

  passport.deserializeUser((email, done) =>
    db
      .one("SELECT * FROM users WHERE email = ${email}", { email })
      .then((user) => {
        const { id, name, email } = user;
        done(null, { id, name, email });
      })
      .catch((err) => done(err, null))
  );
};
