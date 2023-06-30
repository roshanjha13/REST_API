const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

const product_routes = require("./routes/product");

app.use("/api/products", product_routes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
