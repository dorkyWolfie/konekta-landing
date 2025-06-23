import "../../globals.css";
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
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
