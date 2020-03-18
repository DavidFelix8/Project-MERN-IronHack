'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    enum: ['Base', 'Premium', 'Star']
  },
  categories: [
    {
      /* type: mongoose.Schema.Types.ObjectId,
      ref: 'Service' */
      type: String
    }
  ],
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
