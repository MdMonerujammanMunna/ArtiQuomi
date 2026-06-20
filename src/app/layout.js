const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/Navibar";
import Footer from "@/components/Footer/FooterSection";
import { ToastContainer } from "react-toastify";

const InterTO = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Space_GroteskTO = Space_Grotesk({
  variable: "--font-geist-space",
  subsets: ["latin"],
});

export const metadata = {
  title: "ArtiQuomi | AI Prompt Sharing & Marketplace Platform",
  description: "This is a demo of ArtiQuomi, an AI prompt sharing & marketplace platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${InterTO.variable} ${Space_GroteskTO.variable} font-sans`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-white container mx-auto">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
