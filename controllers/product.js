const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, productName, featured } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }
  if (productName) {
    queryObject.productName = { $regex: productName, $options: "i" };
  }

  if (featured) {
    queryObject.featured = featured;
  }

  const product = await Product.find(queryObject);
  res.status(200).json({ product });
};

module.exports = {
  getAllProducts,
};
