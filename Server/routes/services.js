'use strict';

const express = require('express');
const { Router } = express;

const router = new Router();
const Service = require('./../models/service');

router.get('/', async (req, res, next) => {
  try {
    const services = await Service.find();
    res.json({ services });
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
