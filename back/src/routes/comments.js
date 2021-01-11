const router = require("express").Router()
const CommentsController = require("../../db/controllers/commentsController")

router.get("/:tabId", CommentsController.findAll)
router.post("/:tabId/:userId", CommentsController.create)

module.exports = router
