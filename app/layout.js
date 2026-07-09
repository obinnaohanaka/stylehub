import "./globals.css";
import { Toaster } from "react-hot-toast";
import AppLoader from "@/components/AppLoader";
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


      <body className="bg-gray-100 antialiased">
        <OutfitProvider>
          <Toaster position="top-right" reverseOrder={false} />

          <AppLoader>
            <Header />
            <main>{children}</main>
            <Footer />
          </AppLoader>
        </OutfitProvider>
      </body>
    </html>
  );
}