import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Конекта",
  description: "1 допир, 1000 можности",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mk">
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <body>
        <Header />
        <main className="max-w-6xl md:m-auto p-6 md:h-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
