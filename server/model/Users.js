const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    Picture: String,
    Series: String, 
    BodyType: String,
    Description: String,
    FoundIn: String,
})

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;