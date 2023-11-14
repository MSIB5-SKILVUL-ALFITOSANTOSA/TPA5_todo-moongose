const express = require("express");
const router = express.Router();

const UserRoute = require("./user_route");
const todoRoute = require("./todo_route");
const authRoute = require("./auth_route");

router.get("/", (req, res) => {
  res.json("selamat datang di API todo-list...");
});

router.use("/auth", authRoute);
router.use("/users", UserRoute);
router.use("/todos", todoRoute);

module.exports = router;
