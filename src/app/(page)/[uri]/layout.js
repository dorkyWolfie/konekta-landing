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
    description: PageData.bio || "1 допир, 1000 можности",
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
        <meta name="robots" content="noindex,nofollow" />

      </head>
      <body>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
