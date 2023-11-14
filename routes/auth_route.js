const express = require('express');
const { login, registes } = require('../controller/auth_controller');
const router = express.Router();

router.post("/login", login)
router.post("/register", registes)

module.exports = router;