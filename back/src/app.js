const express = require('express')
const morgan = require('morgan')
const path = require('path')
const routes = require('./routes/index')
const passport = require('passport')
const app = express()
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const cors = require("cors")
const LocalStrategy = require('passport-local').Strategy
const User = require("../db/models/user")

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(
  cors({
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
)
app.use(cookieParser())
app.use(sessions({
  secret: "mysecret",
  resave: false,
  saveUnitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use("/public", express.static(`${__dirname}/storage/imgs`))
app.use(express.static(__dirname + "/public"));
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
//passport
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
    }, function(email, password, done){
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
//error middleware
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

//routes
 app.use("/api", routes)

//static files
app.use("/*", function (req, res, next) {
   res.sendFile(__dirname + "/public/index.html")
})


module.exports = app
