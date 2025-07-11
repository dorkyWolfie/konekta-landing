import NextAuth from "next-auth";
import clientPromise from "@/libs/mongoClient";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoose from "mongoose";
import { user as UserModel } from "@/models/user"; // твојот модел

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await mongoose.connect(process.env.MONGO_URI);
        const existingUser = await UserModel.findOne({ email: user.email });

        if (!existingUser) {
          // Корисникот ќе се креира од MongoDBAdapter
          // Но мораме да го апдејтираме веднаш после тоа
          setTimeout(async () => {
            await UserModel.findOneAndUpdate(
              { email: user.email },
              { $set: { subscriptionStatus: "pro" } }
            );
          }, 1000); // мал delay за да се заврши креирањето
        }

        return true;
      } catch (err) {
        console.error("Auth signIn error:", err);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
