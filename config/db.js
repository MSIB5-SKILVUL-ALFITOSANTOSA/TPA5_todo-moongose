const mongoose = require("mongoose");

const db_url =
  process.env.DB_URL ||
  "mongodb+srv://alfitosantosa:Defito02pg@cluster0.hhtznni.mongodb.net/TPA5_todo-moongose";

const db = mongoose.connect(db_url);

module.exports = db;
