import "./globals.css";

import { Inter, Roboto } from "next/font/google";
import Image from "next/image";

import Header from "@/components/header";
import SideBar from "@/components/sidebar";

import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chunyou Su | Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {" "}
      <body
        className={`${roboto.className} bg-[#f7f7f7] flex flex-col items-center text-gray-950 pt-28 sm:pt-36`}
      >
        <Header />
        <Toaster position="top-center" />
        {children}
        <SideBar />
      </body>
    </html>
  );
}
