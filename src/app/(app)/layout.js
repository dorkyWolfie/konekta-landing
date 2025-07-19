import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { user } from "@/models/user";
import mongoose from "mongoose";

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
    // title: `${User.name} | Конекта`,
    description: "Лични информации и поставки",
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

export default function Layout({ children }) {
  return (
    <html lang="mk">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
