const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../app_server/models/user');

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user || !user.isValidPassword(password)) {
        return done(null, false, {
          message: 'Неправильный пароль или e-mail'
        });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser((user, callback) => {
  callback(null, user.id);
});

passport.deserializeUser((id, callback) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    callback(null, user);
  });
});
