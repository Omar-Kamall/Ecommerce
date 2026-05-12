import { NextResponse } from "next/server"

export const POST = async () => {
  const res = NextResponse.json({ message: "Logged out successfully" });

  res.cookies.set("token", "", {
    path: "/",
    maxAge: 0,
  })

  return res;
}