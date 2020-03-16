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

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const subscription = await Subscription.findById(id);
    res.json({ subscription });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
