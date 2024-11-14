const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { check } = require("express-validator");

router.post("/registration", [
  check("username", "username cant be empty").notEmpty(),
  check("password", "password must be in range 8-16").isLength({
    min: 8,
    max: 16,
  }),
  controller.registration,
]);
router.post("/login", controller.login);
router.get("/users", controller.getUsers);

module.exports = router;
