'use strict';

const express = required('express');
const { Router } = express;

const router = new Router();
const Service = require('./../models/service');

router.get('/services', async (req, res, next) => {
  try {
    const services = await Service.find();
    res.json({ services });
  } catch (error) {
    next(error);
  }
});

router.get;
module.exports = router;
