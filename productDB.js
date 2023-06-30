const connectDb = require("./configDB/connect");
require("dotenv").config();
const Product = require("./models/product");
const ProductJson = require("./product.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
