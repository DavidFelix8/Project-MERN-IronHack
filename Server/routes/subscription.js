'use strict';

const express = require('express');
const { Router } = express;

const router = new Router();
const Subscription = require('./../models/subscription');
const User = require('./../models/user');

router.get('/list', async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find();
    res.json({ subscriptions });
  } catch (error) {
    next(error);
  }
});

router.post('/:id/select', async (req, res, next) => {
  // console.log('at the backemd select route');
  const subscriptionId = req.params.id;
  try {
    await User.findByIdAndUpdate(req.user._id, { subscription: subscriptionId });
    res.json({});
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find();
    res.json({ subscriptions });
  } catch (error) {
    next(error);
  }
});

router.get('/find/:id', async (req, res, next) => {
  // console.log(req.params.id, 'at the backend');
  try {
    await Subscription.findById(req.params.id).then(sub => {
      console.log(sub);
      res.json({ sub });
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
