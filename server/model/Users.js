const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name: String,
    Picture: String,
    Series: String, 
})

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;