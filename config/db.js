const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`MongoBD Connect: ${conn.connection.host}`);
  } catch (error) {
    throw Error(error);
  }
};

module.exports = connectDB;