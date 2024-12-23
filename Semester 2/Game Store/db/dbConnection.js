const MONGO_URI = "mongodb://localhost:27017/test";
const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect("mongodb://localhost:27017/game-Store").then(() => {
    console.log("Connected to the database");
  }).catch((err) => {
    console.log(err);
  });
};

module.exports = dbConnection;