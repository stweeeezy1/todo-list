const Router = require("express");
const router = new Router();
const controller = require("./authController");
<<<<<<< HEAD
const authMiddleware = require("./middlewaree/authMiddleware");
const roleMiddleware = require("./middlewaree/roleMiddleware");
=======
const { check } = require("express-validator");
>>>>>>> 21021add340308af98893f4c0d91a816204c166f

router.post("/registration", [
  check("username", "username cant be empty").notEmpty(),
  check("password", "password must be in range 8-16").isLength({
    min: 8,
    max: 16,
  }),
  controller.registration,
]);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(["USER"]), controller.getUsers);

module.exports = router;
