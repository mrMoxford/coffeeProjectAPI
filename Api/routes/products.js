const Product = require("../models/product");
const cors = require("cors");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({ updatedProduct });
  } catch (err) {
    res.status(500).json(err);
  }
});

delete router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Product
router.get("/find/:id", cors(), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});
// //Get All Products
router.get("/", cors(), async (req, res) => {
  const qNew = req.query.new;
  const qCountry = req.query.country;
  const qRegion = req.query.region;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ _id: -1 }).limit(5);
    } else if (qRegion) {
      products = await Product.find({ region: { $in: [qRegion] } });
    } else if (qCountry) {
      products = await Product.find({ country: { $in: [qCountry] } });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
