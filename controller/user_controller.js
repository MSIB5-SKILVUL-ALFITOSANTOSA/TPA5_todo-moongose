const Todo = require("../models/todo");
const User = require("../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find();
    res.json({
      message: "success getting all data",
      data: users,
    });
  },

  getUserById: async (req, res) => {
    const { id } = req.params;

    const data = await User.findById(id);

    res.json({
      message: "success getting data by id",
      data: data,
    });
  },

  getUserTodos: async (req, res) => {
    const { id } = req.params;

    const data = await Todo.find({ userID: id }).populate("userID", "name");

    res.json({
      message: "success getting data by id",
      data: data,
    });
  },

  createUser: async (req, res) => {
    let data = req.body;

    await User.create(data);
    res.json({
      message: "success creating data user",
      data: data,
    });
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;

    const data = await User.findByIdAndRemove(id);

    res.json({
      message: "success getting data by id",
      data: data,
    });
  },
};
