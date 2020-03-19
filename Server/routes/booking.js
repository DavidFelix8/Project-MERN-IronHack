'use strict';

const express = require('express');
const { Router } = express;

const router = new Router();
const Booking = require('./../models/booking');

router.get('/list', async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.user._id });
    res.json({ bookings });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
