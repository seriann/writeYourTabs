const router = require("express").Router()
const UserController = require("../../db/controllers/usersController")

router.get("/", UserController.findAll)
router.get("/:id", UserController.findById)
router.post("/", UserController.create)
router.put("/:id", UserController.update)
router.put("/delete/:id", UserController.delete)

//------------------------Favourites--------------------------------------------
router.get("/:id/showfav/tabs", UserController.showFavTabs)
router.post("/:id/addfav/tab/:tabId", UserController.addFavTab)
router.delete("/:id/delfav/tab/:tabId", UserController.deleteFavProduct)

module.exports = router
