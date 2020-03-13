'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service'
    }
  ],
  charged: {
    type: Boolean
  },
  price: {
    amount: {
      type: Number,
      min: 0
    },
    currency: {
      type: String,
      enum: ['EUR', 'USD', 'GBP']
    }
  }
});

module.exports = mongoose.model('Subscription', schema);