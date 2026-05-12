import { connectDB } from "@/src/lib/dbConnect";
import { Product } from "@/src/models/Products";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // connnect DB
    const db = await connectDB();
    if (!db) {
      return NextResponse.json("Failed to Connect DataBase", { status: 500 });
    }

    // fetch all products from DB
    const products = await Product.find();

    return NextResponse.json({ data: products, message: "Products fetched successfully" });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to fetch products" }, { status: 500 });
  }
}


export const POST = async (req: Request) => {
  try {
    // connect DB
    const db = await connectDB();
    if (!db) {
      return NextResponse.json("Failed to Connect DataBase", { status: 500 });
    }

    // get product data from request body
    const product = await req.json();
    console.log(product)

    // create new product and save in DB
    const newProduct = new Product(product);
    await newProduct.save();

    return NextResponse.json({ data: newProduct, message: "Product created successfully" });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to create product" }, { status: 500 });
  }
}
