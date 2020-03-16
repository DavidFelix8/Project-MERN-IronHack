'use strict';

const express = require('express');
const { Router } = express;

const router = new Router();

router.get('/', (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = router;
