const User = require("./models/User");
const Role = require("./models/Role");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "error with registration", errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "That username already exists" });
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });

      if (!userRole) {
        return res.status(404).json({ message: "Role not found" });
      }

      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole],
      });

      await user.save();
      return res.json({ message: "User was successfully signed up" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: `user ${username} not found` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "wrong password" });
      }
    } catch (e) {
      res.status(400).json({ message: "Login error" });
    }
  }

  async getUsers(req, res) {
    try {
      res.json("Server works");
    } catch (e) {
      res.status(400).json({ message: "Error fetching users" });
    }
  }
}

module.exports = new authController();
