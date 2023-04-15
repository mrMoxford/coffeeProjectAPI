const path = require("path");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./Api/routes/user");
const authRoute = require("./Api/routes/auth");
const productRoute = require("./Api/routes/products");
const cartRoute = require("./Api/routes/cart");
const orderRoute = require("./Api/routes/order");
const stripeRoute = require("./Api/routes/StripeCheckout");

const app = express();

app.use(cors());

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_SECRETKEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"))
  .catch(err => console.log(err));
//middlewares
app.use(bodyParser.json());

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// serve front end
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../coffeeProject/Client/dist")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../coffeeProject/Client/dist/index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("please set to production"));
}
app.listen(process.env.PORT || 5000, () => {
  console.log("Api is running!");
});
