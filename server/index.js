const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// define User model for db with mongoose & authorisation strategy with PassportJS.
require('./models/User');
require('./services/passport');

// simple database connection upon app startup using mongoose.
mongoose.connect(keys.mongoURI);

//define express app then start listening to authentication URLs via authRoutes.js
const app = express();
require('./routes/authRoutes')(app);

// use server port from .env file in production or default to 5000 for local dev.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
