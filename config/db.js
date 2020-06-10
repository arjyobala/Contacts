const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

let mongoURI;

if (process.env.NODE_ENV === "production") {
  mongoURI = config.get("mongoURI");
} else {
  mongoURI = "mongodb://localhost:27017/contact_keeper";
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Mongo Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
