const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")("sk_test_51L7O6jSAVtrj21rxvtqgxgB33rfTygppWPWOqEw7URzd1AHR7YWuKyW1W3x19aDxccq1Zzg0mwWmaPlFPdhR0LW200z5ElAQBd");

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
