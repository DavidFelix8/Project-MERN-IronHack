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

router.get('/', async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.json({ bookings });
  } catch (error) {
    next(error);
  }
});

router.get('/find/:id', async (req, res, next) => {
  console.log(req.params.id, 'at the backend');
  try {
    await Booking.findById(req.params.id).then(book => {
      console.log(book);
      res.json({ book });
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
