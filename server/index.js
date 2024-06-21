const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/Users');
const CollectionModel = require('./model/Collection');

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

app.post('/collection', (req, res) => {
  CollectionModel.create(req.body)
  .then(collection => res.json(collection))
  .catch(err => res.json(err))
})

app.post("/login", (req, res) => {
  const {email, password} = req.body;
  CollectionModel.findOne({email: email})
  .then(user => {
    if (user) {
      if (user.password === password) {
        res.json("Success")
      } else {
        res.json("the password is incorrect")
        }
    } else {
      res.json("No record existed")
    }
  })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
