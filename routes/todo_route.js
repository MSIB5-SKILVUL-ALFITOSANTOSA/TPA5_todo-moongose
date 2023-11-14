const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodoById,
  deleteTodo,
  deleteAllTodo,
} = require("../controller/todo_controller");
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, getAllTodo);
router.get("/:id", verifyToken, getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodoById);
router.delete("/", deleteTodo);
router.delete("/all", deleteAllTodo);

module.exports = router;
