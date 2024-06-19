const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

app.get('/getUsers', (req, res) => {
  console.log("Received request for /getUsers");
  UserModel.find()
    .then(users => {
      console.log("Users fetched from database:", users);
      res.json(users);
    })
    .catch(err => {
      console.log("Error fetching users:", err);
      res.status(500).json(err);
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
