const express = require('express')
const morgan = require('morgan')
const path = require('path')
const routes = require('./routes/index')

const app = express()

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

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
