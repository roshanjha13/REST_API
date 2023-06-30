const mongoose = require("mongoose");
const uri = process.env.MONGO_URL;

const connectDb = () => {
  console.log("connect db");
  return (
    mongoose.connect(uri),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connectDb;
