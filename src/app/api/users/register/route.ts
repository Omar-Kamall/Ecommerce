import { connectDB } from "@/src/lib/dbConnect";
import { User } from "@/src/models/Users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  try {
    // connect DB
    const db = await connectDB();
    if (!db) {
      return NextResponse.json("Failed to Connect DataBase", { status: 500 });
    }

    // get user data from request body
    const user = await req.json();

    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return NextResponse.json({ error: "If registration is successful, you'll be Notified" }, { status: 400 });
    }

    // hash password before saving to DB
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // create new user and save in DB
    const newUser = await new User({ ...user, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ data: { name: newUser.name, email: newUser.email }, message: "User created successfully" });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to create User" }, { status: 500 });
  }
}