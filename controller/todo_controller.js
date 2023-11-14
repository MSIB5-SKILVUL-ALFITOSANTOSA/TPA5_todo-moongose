const Todo = require("../models/todo");

module.exports = {
  getAllTodo: async (req, res) => {
    const user = req.user;
    const data = await Todo.find({ userID: user.id }).populate(
      "userID",
      "name"
    );

    res.json({
      message: "success getting all data",
      data: data,
    });
  },

  getTodoById: async (req, res) => {
    const { id } = req.params;

    const data = await Todo.findById(id);

    res.json({
      message: "success getting data by id",
      data: data,
    });
  },

  createTodo: async (req, res) => {
    let data = req.body;

    await Todo.create(data);
    res.json({
      message: "success",
      data: data,
    });
  },

  deleteTodo: async (req, res) => {
    const { id } = req.params;

    const data = await Todo.findByIdAndRemove(id);

    res.json({
      message: "success getting data by id",
      data: data,
    });
  },
};
