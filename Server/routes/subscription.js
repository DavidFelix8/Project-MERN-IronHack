'use strict';

const express = require('express');
const { Router } = express;

const router = new Router();
const Subscription = require('./../models/subscription');

router.get('/', async (req, res, next) => {
  try {
    const subscription = await Subscription.find();
    res.json({ subscription });
  } catch (error) {
    next(error);
  }
});


router.post('/create-subscription', async (req, res, next) => {
  const { title, category, price } = req.body;
  const subscriptionObj = {
    title,
    category,
    price
  };
  console.log(subscriptionObj);
  try {
    const newSubscription = await Subscription.create(subscriptionObj);
    res.json({ newSubscription });
  } catch (error) {
    next(error);
  }
});
{
  
}

module.exports = router;
