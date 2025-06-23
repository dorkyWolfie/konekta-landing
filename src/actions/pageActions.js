'use server';
import mongoose from "mongoose";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { page } from "@/models/page";
import { user } from "@/models/user";

export async function savePageSettings(formData) {
  mongoose.connect(process.env.MONGO_URI);
  const session = await getServerSession(authOptions);

  if (session) {
    const dataKeys = ['displayName', 'company', 'position', 'location', 'bio', 'bgType', 'bgColor', 'bgImage'];

    const dataToUpdate = {};
    for (const key of dataKeys) {
      if (formData.has(key)) {
        dataToUpdate[key] = formData.get(key);
      }
    }

    await page.updateOne (
      {owner: session?.user?.email},
      dataToUpdate,
    );

    if (formData.has('avatar')) {
      const avatarLink = formData.get('avatar');
      await user.updateOne(
        {email: session.user?.email},
        {image: avatarLink},
      );
    }

    return true;
  }
  return false;
}

export async function savePageButtons(formData) {
  mongoose.connect(process.env.MONGO_URI);
  const session = await getServerSession(authOptions);

  if (session) {
    const buttonsValues = {};
    formData.forEach((value, key) => {
      buttonsValues[key] = value;
    });
    const dataToUpdate = {buttons:buttonsValues};
    await page.updateOne (
      {owner: session?.user?.email},
      dataToUpdate,
    );
    return true;
  }
  return false;
}

export async function savePageLinks(links) {
  mongoose.connect(process.env.MONGO_URI);
  const session = await getServerSession(authOptions);

  if(session) {
    await page.updateOne (
      {owner: session?.user?.email},
      {links:links},
    );
  } else {
    return false;
  }
}