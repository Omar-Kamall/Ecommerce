import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL as string;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL)
    return true;
  } catch (error) {
    return error;
  }
}