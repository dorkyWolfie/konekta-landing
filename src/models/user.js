import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  image: String,
  emailVerified: Date,
});

export const user = models?.user || model("user", UserSchema);