import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URI) return console.log("Mongo DB Url Not Found");
  if (isConnected) return console.log("Already Connected to MongoDB");

  try {
    await mongoose.connect(process.env.MONGO_URI);

    isConnected = true;

    console.log("====================================");
    console.log("Connected to MongoDB");
    console.log("====================================");
  } catch (error) {
    console.error(error);
  }
};
