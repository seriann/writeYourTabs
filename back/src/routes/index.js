const express = require('express')
const router = express.Router()

router.use("/users", require("./users"))
router.use("/tabs", require("./tabs"))
router.use("/comments", require("./comments"))

module.exports = router
