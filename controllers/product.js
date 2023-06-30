const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, productName, featured, sort } = req.query;
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

  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }

  const product = await apiData;
  res.status(200).json({ product });
};
//- for desc by default aesc

module.exports = {
  getAllProducts,
};
