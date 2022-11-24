//-------------importation express & express Routers
const router = require("express").Router();
//importation du fichiers user controleur
const userController = require("../controllers/Users_Controller");

router.post("/new-user", userController.newUser);
router.get("/all-user", userController.allUser);
router.get("/show-user/:id", userController.showUser);
router.put("/update-user/:id", userController.updateUser);
router.delete("/delete-user/:id", userController.deleteUser)

module.exports = router;