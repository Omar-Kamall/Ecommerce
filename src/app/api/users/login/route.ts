import { connectDB } from "@/src/lib/dbConnect";
import { User } from "@/src/models/Users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (req: Request) => {
  try {
    // connect DB
    const db = await connectDB();
    if (!db) {
      return NextResponse.json("Failed to Connect DataBase", { status: 500 });
    }

    // get user data from request body
    const user = await req.json();

    // check found user with email and password in DB
    const foundUser = await User.findOne({ email: user.email });

    // if user not found or password is incorrect return error response
    if (foundUser) {
      // compare password with hashed password in DB
      const isMatchPassword = await bcrypt.compare(user.password, foundUser.password);
      if (isMatchPassword) {
        // create token
        const token = jwt.sign({ _id: foundUser._id, email: foundUser.email, password: foundUser.password }, "secretKey");


        // return user data and token in response
        const res = NextResponse.json({ user: { name: foundUser.name, email: foundUser.email, token }, message: "Login successfully" });

        // set token in cookie
        res.cookies.set("token", token, { path: "/" });

        return res;
      }

    }

    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });

  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to login" }, { status: 500 });
  }
}