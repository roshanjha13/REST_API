const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, productName, featured, sort, select } = req.query;
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

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const product = await apiData;

  res.status(200).json({ product, nbHits: product.length });
};
//- for desc by default aesc

module.exports = {
  getAllProducts,
};
