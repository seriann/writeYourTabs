const router = require("express").Router()
const upload = require("../libs/pdfStorage")
const TabController = require("../../db/controllers/tabsController")

router.get("/", TabController.findAll)
router.post("/",upload.single("pdf"), TabController.create)
router.put("/:id", TabController.update)
router.get("/:id", TabController.findById)
router.get("/sf/:userId", TabController.findAllUserTabs)
router.put("/delete/:id", TabController.delete)
router.get("/v/search", TabController.search)

module.exports = router
