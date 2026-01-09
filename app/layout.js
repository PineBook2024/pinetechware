import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./utils/LenisProvider";
import { PopupProvider } from "@/context/PopupContext";
import Head from "next/head";
import Script from "next/script"; 

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
      <head>
         {/* Google Site Verification */}
        <meta
          name="google-site-verification" content="7agVOEhFnTjtyKnsizzVmaLAUfkU4MZH3YvuapFIRh8" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SDVD9HEY4L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SDVD9HEY4L');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LenisProvider>
          <PopupProvider>
            {children}
          </PopupProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
