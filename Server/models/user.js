'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String
  },
  location: {
    type: String
    // required: true  To add google maps later if we can otherwise just a form with location
  },
  subscription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subscription'
  },
  stripeCustomerId: {
    type: String
  },
  charged: {
    type: Boolean
  }
});

module.exports = mongoose.model('User', schema);
