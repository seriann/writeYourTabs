const router = require("express").Router()
const TabController = require("../../db/controllers/tabsController")

router.get("/", TabController.findAll)
router.post("/", TabController.create)
router.put("/:id", TabController.update)
router.get("/:id", TabController.findById)
router.put("/delete/:id", TabController.delete)

module.exports = router
