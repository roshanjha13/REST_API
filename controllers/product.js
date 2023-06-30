const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json(product);
};
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I am get All Products for testing" });
};

module.exports = {
  getAllProducts,
  getAllProductsTesting,
};
