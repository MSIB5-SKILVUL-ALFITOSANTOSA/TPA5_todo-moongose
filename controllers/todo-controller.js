const Todo = require("../models/todo");

module.exports = {
  getAllTodo: async (req, res) => {
    const todos = await Todo.find();

    res.json({
      message: "berhasil mendapatkan data todo",
      data: todos,
    });
  },

  getTodoById: (req, res) => {
    const { id } = req.params;
    const todos = Todo.find(id);

    res.json(todos);
  },

  createTodo: async (req, res) => {
    let data = req.body;

    await Todo.create(data);

    res.json({
      message: "berhasil membuat data todo",
    });
  },
};
