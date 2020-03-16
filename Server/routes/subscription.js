'use strict';

const express = required('express');
const { Router } = express;

const router = new Router();
const Subscription = require('./../models/subscription');

router.get('/subscription', async (req, res, next) => {
  try {
    const subscription = await Subscription.find();
    res.json({ subscription });
  } catch (error) {
    next(error);
  }
});

router.get;
module.exports = router;
