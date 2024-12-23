const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect("mongodb://localhost:27017/gameStore").then(() => {
    console.log("Connected to the database👌🚀");
  }).catch((err) => {
    console.log("Faild to Connect To DB😭", err);
  });
};

module.exports = dbConnection;