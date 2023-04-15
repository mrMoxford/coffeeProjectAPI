const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    name: { type: String, reqired: true, unique: true },
    brand: { type: String, require: true },
    country: { type: String },
    region: { type: String },
    image: { type: String },
    size: { type: String },
    roastLevel: { type: String },
    flavourProfile: { type: String },
    price: { type: Number, reqired: true },
  },
  { timestamps: true, collection: "products" }
);
module.exports = mongoose.model("Product", ProductsSchema);
