'use strict';

const express = require('express');
const { Router } = express;

const router = new Router();
const Subscription = require('./../models/subscription');
const Service = require('./../models/service');

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

router.post('/create-service', async (req, res, next) => {
  //object should have the same properties as the model
  // name, category, image, description
  const { name, category, image, description } = req.body;
  const serviceObj = {
    name,
    category,
    image,
    description
  };
  console.log(serviceObj);
  try {
    const newService = await Service.create(serviceObj);
    res.json({ newService });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
