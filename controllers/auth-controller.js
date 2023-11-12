require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const KEY = "secret";

module.exports = {
  login: async (req, res) => {
    const userLogin = req.body;

    try {
      const user = await User.findOne({ email: userLogin.email });
      if (!user) throw new Error("invalid user");

      console.log(user.password, userLogin.password);
      if (user.password !== userLogin.password) throw new Error("invalid user");

      const token = jwt.sign({ id: user._id, email: user.email }, KEY);

      res.json({
        message: "login successfull",
        userId: user._id,
        token,
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  regis: (req, res) => {
    const userRegis = req.body;

    User.create(userRegis)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
};
