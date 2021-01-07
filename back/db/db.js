const mongoose = require('mongoose')
const chalk = require("chalk");

const mongo = require("../env")

mongoose.connect(mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on("error", console.error.bind(console, chalk.red("connection error:")));
db.once("open", () => console.log(chalk.magenta("Database connected")));
