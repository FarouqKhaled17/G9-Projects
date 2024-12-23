const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    role: {
        type: String,
        required: true
    },
    games: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game"
    }],
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;