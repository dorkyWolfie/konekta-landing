'use server';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { page } from "@/models/page";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";

export default async function grabUsername(formData) {
    const username = formData.get('username');
    mongoose.connect(process.env.MONGO_URI);
    const existingPageDoc = await page.findOne({uri:username});
    if (existingPageDoc) {
        return false;
    } else {
        const session = await getServerSession(authOptions);
        const newPage = await page.create({
            uri:username, 
            owner:session?.user?.email,
        });
        return {
            success: true,
            uri: newPage.uri,
            owner: newPage.owner
        };
    }
}