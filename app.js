const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./configDB/connect");

const app = express();

const PORT = process.env.PORT;

const product_routes = require("./routes/product");

app.use("/api/products", product_routes);

const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
