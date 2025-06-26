import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import { user } from "@/models/user";

export async function generateMetadata() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return {
      title: "Конекта | Профил",
      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
    };
  }

  await mongoose.connect(process.env.MONGO_URI);
  const User = await user.findOne({ email: session.user.email });

  return {
    title: `${User.name} | Конекта`,
    description: "Лични информации и поставки",
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="mk">
      <head><meta name="robots" content="noindex,nofollow" /></head>
      <body>{children}</body>
    </html>
  )
}
