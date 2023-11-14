const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) throw new Error("Token yang anda masukan salah");

    const token = header.split(" ")[1];
    if (!token) throw new Error("anda belum memasang token");

    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = verifyToken;
