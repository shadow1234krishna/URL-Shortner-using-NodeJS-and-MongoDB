const mongoose = require("mongoose");

async function connectDB(url) {
  try {
    await mongoose.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = {connectDB};
