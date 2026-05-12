import { model, Schema, models } from "mongoose";


const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
})



export const User = models.User || model("User", UserSchema);