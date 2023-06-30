const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hi i am live");
});

const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`server is running on ${PORT}`);
// });

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
