const express = require("express");
const mongoose = require("mongoose");
const Student = require("./studentModel.js");

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

app.post("/student", async (req, res) => {
    const { name, age, email, password } = req.body;
    const student = new Student({ name, age, email, password });
    await student.save();
    res.status(201).json(student);
})

app.get("/student", async (req, res) => {
    const students = await Student.find();
    res.status(200).json(students);
});

app.get("/student/:id", async (req, res) => {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (student) {
        res.status(200).json(student);
    }
    else {
        res.status(404).json({ message: "Student not found" });
    }
});

app.put("/student/:id", async (req, res) => {
    const { id } = req.params;
    const { name, age, email, password } = req.body;
    const student = await Student.findByIdAndUpdate(id, { name, age, email, password }, { new: true });
    res.status(200).json(student);
});

app.delete("/student/:id", async (req, res) => {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.status(200).json({ message: "Student deleted successfully" });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email, password });
    if (student) {
        res.status(200).json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Login failed" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});