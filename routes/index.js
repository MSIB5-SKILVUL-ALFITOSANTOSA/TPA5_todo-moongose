const express = require("express");
const route = express.Router();

//mengumpulkan semua route
const userRoute = require("./user-route");
const todoRoute = require("./todo-route");
const authRoute = require("./auth-route");

//route index
route.get("/", (req, res) => {
  res.json("ini dari express mongoose dari route index.js");
});

//route lainnya
route.use("/auth", authRoute);
route.use("/users", userRoute);
route.use("/todos", todoRoute);

module.exports = route;
