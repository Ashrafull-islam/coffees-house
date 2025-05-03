import mongoose from "mongoose";

// Connection function
const connectionToDatabase = async () => {
  try {
    // Make sure the environment variable is correctly accessed
    await mongoose.connect(process.env.MONGODB_URI as string); // TypeScript needs a string assertion here
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Stop the app if there's a connection error
  }
};

export default connectionToDatabase;
