const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const users = [
  { id: 1, name: "farouk khaled", email: "faroukkhaled@gmail.com" },
  { id: 2, name: "karim mohamed", email: "karimmohamed@gmail.com" },
];

//* Get all users
app.get("/GetAllUsers", (req, res) => {
  res.json(users);
});

//! Add User
app.post("/AddUser", (req, res) => {
  const userData = req.body;
  const { email, id, name } = userData;
  if (users.find((user) => user.email === email)) {
    res.json({ message: "Email already exists" });
    return;
  }
  users.push({ id, name, email });
  res.json({ message: "User added successfully" });
});

//* Delete User
app.delete("/DeleteUser", (req, res) => {
  const { id } = req.body;
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    res.json({ message: "User not found" });
    return;
  }
  users.splice(userIndex, 1);
  res.json({ message: "User deleted successfully" });
});

//! Update User
app.put("/UpdateUser", (req, res) => {
  const userData = req.body;
  const { email, id, name } = userData;
  const userIndex = users.findIndex((user) => user.email === email);
  if (userIndex === -1) {
    res.json({ message: "User not found" });
    return;
  }
  users[userIndex] = { id, name, email };
  res.json({ message: "User updated successfully" });
});

//? Search user by id
app.get("/SearchUserById/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.json({ message: "User not found" });
    return;
  }
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server is running successfully");
});
