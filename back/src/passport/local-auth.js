const passport = require('passport')
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const LocalStrategy = require('passport-local').Strategy
const User = require("../../db/models/user")


module.exports = (app) => {
app.use(cookieParser())
app.use(sessions({
  secret: "mysecret",
  resave: false,
  saveUnitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) =>
    User.findById(id)
      .then((user) => done(null, user)) // req.user = user
      .catch(done)
  );

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    }, function(email, passowrd, done){
      User.findOne({ email })
          .then(user => {
            if(!user) return done(null, false)

            user.comparePassword(password, (err, isMatch) => {
              if(err) throw err;
              if(!isMatch) return done(null, false);
              return done(null, user)
            })
          })
          .catch(done);
    }
  )
 )
}
