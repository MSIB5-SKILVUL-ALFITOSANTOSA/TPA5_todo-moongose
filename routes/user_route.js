const express = require("express");
const router = express.Router();

const {
    getAllUser,
    getUserById,
    createUser,
    deleteUser,
    getUserTodos,
} = require("../controller/user_controller");
const verifyToken = require("../middleware/auth");

router.get("/", getAllUser);
router.get("/:id/todo", verifyToken, getUserTodos);
router.get("/:id", verifyToken, getUserById);
router.post("/", createUser);
router.delete("/", deleteUser);


module.exports = router;