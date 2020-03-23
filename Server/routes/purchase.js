'use strict';

const express = require('express');
const { Router } = express;

const router = new Router();
const stripe = require('./../stripe-configure');

const Purchase = require('./../models/purchase');
const Subscription = require('./../models/subscription');
const PaymentMethod = require('./../models/payment-method');

router.get('/list', async (req, res, next) => {
  try {
    const purchases = await Purchase.find({ user: req.user._id });
    res.json({ purchases });
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  const { subscriptions: subscriptionIds } = req.body;
  try {
    const subscriptions = await Subscription.find({ _id: subscriptionIds });

    const amount = subscriptions.reduce(
      (total, subscription) => total + subscription.price.amount,
      0
    );
    const currency = 'EUR';

    const paymentMethod = await PaymentMethod.findOne({ owner: req.user._id });
    const purchase = await Purchase.create({
      user: req.user._id,
      subscriptions: subscriptionIds,
      price: { amount, currency },
      charged: false
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      customer: req.user.stripeCustomerId,
      payment_method: paymentMethod.token,
      error_on_requires_action: true,
      confirm: true,
      save_payment_method: true
    });

    await purchase.update({ paymentIntent: paymentIntent.id, charged: true });

    res.json({ purchase });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
