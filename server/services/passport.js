// This file defines the authorisation strategies used by PassportJS
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// PassportJS serialisation
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
});

passport.use(
  // note: this strategy can be called as just 'google', see authRoutes.js
  new GoogleStrategy(
    {
      // params sent in header
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // check if profile ID (googleID) is already assigned to a user.
      User.findOne({ googleID: profile.id }).then ((existingUser) => {
        if (existingUser) {
          // already exists
          done(null, existingUser);
        } else {
          //doesn't already exist
          new User({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      })
    }
  )
);
