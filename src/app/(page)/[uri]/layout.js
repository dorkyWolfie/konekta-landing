import "../../globals.css";
import Footer from "@/components/footer";
import mongoose from "mongoose";
import { page } from "@/models/page";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const uri = resolvedParams.uri;
  await mongoose.connect(process.env.MONGO_URI);
  const PageData = await page.findOne({ uri });

  if (!PageData) {
    return {
      title: "Овој профил не постои | Конекта",
      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
    };
  }

  return {
    title: `${PageData.displayName} | Конекта`,
    description: PageData.bio || "Твојата дигитална прва импресија",
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
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}
