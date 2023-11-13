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

  updateTodo: async (req, res) => {
    const { id } = req.params;
    let data = req.body;

    try {
      const todoId = req.params.id;

      // Gunakan metode findByIdAndUpdate untuk mengupdate todo berdasarkan ID
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        data, // Data yang ingin diupdate diambil dari permintaan (request)
        { new: true } // Opsi { new: true } mengembalikan data yang telah diupdate
      );

      // Periksa apakah todo ditemukan
      if (!updatedTodo) {
        return res.status(404).json({ message: "todo tidak ditemukan" });
      }

      // Respon dengan data todo yang telah diupdate
      res.json(updatedTodo);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat mengupdate tugas" });
    }
  },

  deleteTodo: async (req, res) => {
    const { id } = req.params;

    await Todo.findByIdAndRemove(id);

    res.json({
      message: "berhasil menghapus data todo",
    });
  },

  deleteAllTodo: async (req, res) => {
    await Todo.deleteMany({});

    res.json({
      message: "berhasil menghapus semua data todo",
    });
  },
};
