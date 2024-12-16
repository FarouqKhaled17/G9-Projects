const express = require("express");
const mongoose = require("mongoose");
const User = require("./userModel.js");

const app = express();
app.use(express.json());
const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/test";

mongoose.connect(MONGO_URI).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/user", async (req, res) => {
    const { name, age, email } = req.body;
    const user = new User({ name, age, email });
    await user.save();
    res.status(201).json(user);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});