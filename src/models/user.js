import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  image: String,
  emailVerified: Date,
  subscriptionStatus: { type: String, enum: ['basic', 'pro'], default: 'basic'},
  subscriptionExpiresAt: { type: Date },
});

export const user = models?.user || model("user", UserSchema);