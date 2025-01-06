const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const profileRoutes = require("./routes/Profile.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://ramusiripalli2425:11502772@cluster0.epavj.mongodb.net/RamDJMusic")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/profile", profileRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
