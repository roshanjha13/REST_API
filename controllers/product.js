const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "I am get All Products" });
};
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I am get All Products for testing" });
};

module.exports = {
  getAllProducts,
  getAllProductsTesting,
};
