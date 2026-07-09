import "./globals.css";
import { Toaster } from "react-hot-toast";

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
            <Toaster
              position="top-right"
              reverseOrder={false}
            />

            <Header />
            <main>{children}</main>
            <Footer />
          </OutfitProvider>
        </body>
    </html>
  );
}