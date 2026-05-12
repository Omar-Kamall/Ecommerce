import { connectDB } from "@/src/lib/dbConnect";
import { Product } from "@/src/models/Products";
import { NextResponse } from "next/server";

export const PUT = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
  try {
    // connect DB
    const db = await connectDB();
    if (!db) {
      return NextResponse.json("Failed to Connect DataBase", { status: 500 });
    }

    // get product id from query params
    const { id } = await params;

    // get product data from request body
    const product = await req.json();

    // find product by id and update in DB
    const updateProduct = await Product.findByIdAndUpdate(id, product, { new: true });

    return NextResponse.json({ data: updateProduct, message: "Product updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to update product" }, { status: 500 });
  }
};



export const DELETE = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
  try {
    // connect DB
    const db = await connectDB();
    if (!db) {
      return NextResponse.json("Failed to Connect DataBase", { status: 500 });
    }

    //get product id
    const { id } = await params;
    console.log(params)

    // find product by id and delete from DB
    const deleteProduct = await Product.findByIdAndDelete(id);

    return NextResponse.json({ data: deleteProduct, message: "Product deleted successfully" });

  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to update product" }, { status: 500 });
  }
}