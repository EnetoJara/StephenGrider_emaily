// Mongoose requires
const mongoose = require('mongoose');
const { Schema } = mongoose;

// define schema for model
const userScema = new Schema({
  // user db entry has one item of info, googleID
  googleID: String
})

// create the 'users' collection in db with the user scema
mongoose.model('users', userScema);
