require("dotenv").config(); // Load environment variables

const mongoose = require("mongoose");

// const MONGODB_URL = process.env.MONGODB_URL; // Read from .env file
MONGODB_URL = "mongodb+srv://coder7650:JOIUOykLvO20cnD2@cluster0.x4to4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
if (!MONGODB_URL) {
  console.error("❌ MONGODB_URL is not defined! Check your .env file.");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB not connected:", error);
    process.exit(1);
  }
};

module.exports = connectDB;



// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const MONGO_URL = "mongodb+srv://coder7650:JOIUOykLvO20cnD2@cluster0.x4to4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//     await mongoose.connect(MONGO_URL,{
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     // mongoose.connect("mongodb://127.0.0.1:27017/codeIDE");
//     console.log("MongoDB connected");
//     console.log(process.env.MONGODB_URL);
    
//   } catch (error) {
//     console.log("MongoDB not connected",error)
//   }
// };

// module.exports = connectDB;