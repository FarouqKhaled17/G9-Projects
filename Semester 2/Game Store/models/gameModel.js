const { mongoose } = require("mongoose");

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    players: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
}, {
    timestamps: true
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;