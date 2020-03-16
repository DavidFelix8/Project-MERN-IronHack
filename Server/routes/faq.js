'use strict';

const express = require('express');
const { Router } = express;

const router = new Router();

router.get('/faq', (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = router;
