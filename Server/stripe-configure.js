const stripe = require('stripe');
const stripeInstance = stripe(process.env.STRIPE_SECRET);

module.exports = stripeInstance;
