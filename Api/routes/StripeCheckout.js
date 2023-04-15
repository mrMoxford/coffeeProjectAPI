const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_KEY);
require("dotenv").config();
const router = express.Router();
router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.products.map(item => {
    return {
      price_data: {
        currency: "jpy",
        product_data: {
          name: item.name,
          images: [item.image],
          description: item.brand,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price,
      },
      quantity: 1,
    };
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "JP", "GB"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 2000,
            currency: "jpy",
          },
          display_name: "standard shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 5000,
            currency: "jpy",
          },
          display_name: "Next day delivery",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}success`,
    cancel_url: `${process.env.CLIENT_URL}cart`,
  });
  res.send({ url: session.url });
});
module.exports = router;
