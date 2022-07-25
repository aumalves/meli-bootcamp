const express = require('express');

const users = express.Router();

const usersData = [
  {
    id: 1,
    username: 'marvin',
    password: 'iDintAskToBeMade42',
  },
  {
    id: 2,
    username: 'ford_perfect',
    password: 'PraxibetelIx',
  }
];

users.get("/", (_req, res) => {
  return res.status(200).json({usersData});
});

users.post("/", (req, res) => {
  const user = req.body;
  usersData.push(user);

  return res.status(201).json({user});
});

users.delete("/", (req, res) => {
  const { id } = req.body

  usersData.splice(+id -1, 1);

  return res.status(204).end();
});

users.put("/:id", (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  const editedUser = { id: +id, username, password };
  users.splice(+id -1, 1, editedUser);

  return res.status(200).json(editedUser);
});

users.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  const userIndex = users.findIndex(item => item.id === +id);
  const user = users[userIndex];
  user.password = password;

  return res.status(200).json({edited: users[userIndex] })
})

module.exports = users;