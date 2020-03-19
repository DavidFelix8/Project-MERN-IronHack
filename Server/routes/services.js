'use strict';

const express = require('express');
const { Router } = express;

const router = new Router();
const Subscription = require('./../models/subscription');
const Service = require('./../models/service');
const Booking = require('./../models/booking');

router.get('/list', async (req, res, next) => {
  try {
    const services = await Service.find();
    res.json({ services });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const service = await Service.findById(id);
    res.json({ service });
  } catch (error) {
    next(error);
  }
});

router.post('/:id/book', async (req, res, next) => {
  const serviceId = req.params.id;
  const subscriptionId = req.user.subscription;
  const date = req.body.date;
  if (!subscriptionId) {
    next(new Error('User has no active subscription'));
  } else {
    try {
      const subscription = await Subscription.findById(subscriptionId);
      const categories = subscription.categories;
      const service = await Service.findById(serviceId);
      if (categories.includes(service.category)) {
        // User can book
        const booking = await Booking.create({
          user: req.user._id,
          service: serviceId,
          date: new Date(date)
        });
        res.json({ booking });
      } else {
        next(new Error("User's subscription does not include service."));
      }
    } catch (error) {
      next(error);
    }
  }
});

module.exports = router;
