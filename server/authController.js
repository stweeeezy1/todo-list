const User = require("./models/User");
const Role = require("./models/Role");
const bcrypt = require("bcryptjs");

class authController {
  async registration(req, res) {
    try {
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
        roles: [userRole._id],
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
