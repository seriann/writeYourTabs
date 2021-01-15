const router = require("express").Router()
const upload = require("../libs/storage")
const UserController = require("../../db/controllers/usersController")
const passport = require("passport")

router.get("/", UserController.findAll)
router.get("/:id", UserController.findById)
router.post("/", upload.single("image"),UserController.create)
router.put("/:id", UserController.update)
router.put("/delete/:id", UserController.delete)
router.post("/login",passport.authenticate("local"), UserController.login)
router.post("/logout", UserController.logout)
router.get("/me", UserController.check)

//------------------------Favourites--------------------------------------------
router.get("/:id/showfav/tabs", UserController.showFavTabs)
router.post("/:id/addfav/tab/:tabId", UserController.addFavTab)
router.delete("/:id/delfav/tab/:tabId", UserController.deleteFavProduct)

module.exports = router
