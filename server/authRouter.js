const Router = require("express");
const router = new Router();
const controller = require("./authController");
const authMiddleware = require("./middlewaree/authMiddleware");
const roleMiddleware = require("./middlewaree/roleMiddleware");

router.post("/registration", controller.registration);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(["USER"]), controller.getUsers);

module.exports = router;
