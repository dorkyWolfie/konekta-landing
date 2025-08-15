import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollButton from "@/components/mobMenu";
import { Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata = {
  title: "Конекта",
  description: "Твојата дигитална прва импресија",
  openGraph: {
    title: "Конекта",
    description: "Твојата дигитална прва импресија",
    images: [
      {
        url: "https://konekta.mk/_next/image?url=%2Fkonekta_logo_0.webp&w=96&q=75",
        width: 96,
        height: 96,
      },
    ],
  },
  robots: {
      index: true,
      follow: true,
      nocache: false,
    },
};

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['cyrillic', 'latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="mk" className={manrope.className}>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Конекта" />
        <meta property="og:description" content="Твојата дигитална прва импресија" />
        <meta property="og:image" content="https://konekta.mk/_next/image?url=%2Fkonekta_logo_0.webp&w=96&q=75" />
        <link rel="icon" href="/icon.ico" sizes="32x32" />
      </head>
      <body>
        <ScrollButton />
        <Header />
        {children}
        <Toaster />
        <Footer />
        <GoogleAnalytics gaId="G-83G19DTXF2" />
      </body>
    </html>
  );
}
