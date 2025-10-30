import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./utils/LenisProvider";
import { PopupProvider } from "@/context/PopupContext";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "PineTechware | Software & Digital Solutions",
//   description:
//     "Expert web and software development company for modern businesses.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 👇 Dono providers wrap kar diye */}
        <LenisProvider>
          <PopupProvider>
            {children}
          </PopupProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
