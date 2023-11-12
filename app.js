const express = require("express");
const cors = require("cors");

const db = require("./config/db");
const allRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

db.then(() => {
  console.log("connected to mongodb");
}).catch(() => {
  console.log("gagal konek ke mongodb");
});

app.use(cors());
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
