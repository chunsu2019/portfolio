import "./globals.css";

import { Inter, Roboto } from "next/font/google";
import Image from "next/image";

import Header from "@/components/header";
import SideBar from "@/components/sidebar";

import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

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
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ASSIST_KEY}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ASSIST_KEY}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </html>
  );
}
