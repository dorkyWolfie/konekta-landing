import "./globals.css";
import { Manrope } from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollButton from "@/components/mobMenu";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Конекта",
  description: "Твојата дигитална прва импресија",
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
        <link rel="icon" href="/icon.ico" sizes="32x32" />
      </head>
      <body>
        <ScrollButton />
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
