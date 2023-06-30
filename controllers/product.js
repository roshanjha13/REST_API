const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const product = await Product.find(req.query);
  res.status(200).json({ product });
};

module.exports = {
  getAllProducts,
};
