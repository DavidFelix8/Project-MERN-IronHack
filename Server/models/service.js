'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    trim: true
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Service', schema);
