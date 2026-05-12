import { Product } from "../models/Products";
import { connectDB } from "./dbConnect";


export async function getProducts() {
  await connectDB();
  return await Product.find().lean();
}