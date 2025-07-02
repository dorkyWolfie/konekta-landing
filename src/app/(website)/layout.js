import "../globals.css";
import { Manrope } from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollButton from "@/components/mobMenu";

export const metadata = {
  title: "Конекта",
  description: "Твојата дигитална прва импресија",
};

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['cyrillic', 'latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="mk" className={manrope.className}>
      <body>
        <ScrollButton />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
