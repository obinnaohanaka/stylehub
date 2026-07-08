import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OutfitProvider } from "@/context/OutfitContext";

export const metadata = {
  title: "StyleHub",
  description: "Fashion Lookbook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <OutfitProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </OutfitProvider>
      </body>
    </html>
  );
}