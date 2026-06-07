require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    console.log("Server started on port 5000");
});