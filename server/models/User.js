// Mongoose requires
const mongoose = require('mongoose');
const { Schema } = mongoose;

// define schema for model
const userScema = new Schema({
  // user db entry has one item of info, googleID
  googleID: String
})

// create the user model to be used for adding to/creating users collection in db
mongoose.model('users', userScema);
