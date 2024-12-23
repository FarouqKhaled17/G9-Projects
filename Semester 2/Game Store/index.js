const express = require("express");
const Game = require("./models/gameModel");
const dbConnection = require("./db/dbConnection");
const User = require("./models/userModel.js");
const { uploadSingleFile } = require("./fileUpload.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));
const PORT = 4000;
dbConnection();


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/game", uploadSingleFile("image"), async (req, res) => {
    const { name, description, price, players, duration, age } = req.body;
    const game = new Game({ name, description, price, players, duration, age });
    if (req.file) {
        game.image = req.file.path;
    }
    await game.save();
    res.status(201).json(game);
});
app.post("/user/game", async (req, res) => {
    const { gameId, id } = req.body;
    const user = await User.findById(id);
    if (user) {
        user.games.push(gameId);
        await user.save();
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
})

app.get("/game", async (req, res) => {
    const games = await Game.find();
    res.status(200).json(games);
});

app.get("/game/:id", async (req, res) => {
    const { id } = req.params;
    const game = await Game.findById(id);
    if (game) {
        res.status(200).json(game);
    } else {
        res.status(404).json({ message: "Game not found" });
    }
});

app.put("/game/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description, price, players, duration, age } = req.body;
    const updatedGame = await Game.findByIdAndUpdate(id, { name, description, price, players, duration, age }, { new: true });
    res.status(200).json(updatedGame);
});
app.delete("/game/:id", async (req, res) => {
    const { id } = req.params;
    await Game.findByIdAndDelete(id);
    res.status(200).json({ message: "Game deleted successfully" });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.status(200).json({ message: "Login successful", user });
    } else {
        res.status(401).json({ message: "Email Or Password Maybe Incorrect" });
    }
});

app.post("/signup", uploadSingleFile("image"), async (req, res) => {
    const { username, email, password, role } = req.body;
    const exist = await User.findOne({ email, password });
    if (exist) {
        res.status(400).json({ message: "User already exists" });
        return;
    }
    const user = new User({ username, email, password, role });
    if (req.file) {
        user.image = req.file.path;
    }
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
});

app.get("/user", async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

app.get("/user/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});