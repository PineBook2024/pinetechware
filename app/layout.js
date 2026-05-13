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

useEffect(() => {
  const isMobile = window.innerWidth < 768;

  // Mobile par auto-open OFF
  if (isMobile) {
    return;
  }

  // Desktop par auto-open ON
  const checkZendesk = setInterval(() => {
    if (typeof window.$zopim !== "undefined" && window.$zopim.livechat) {
      window.$zopim.livechat.window.show();
      clearInterval(checkZendesk);
    }
  }, 1000);

  return () => clearInterval(checkZendesk);
}, []);

// export const metadata = {
//   title: "PineTechware | Software & Digital Solutions",
//   description:
//     "Expert web and software Marketing Company for modern businesses.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=6ad75b0f-d085-4cae-9a7a-48abeb69b973"
          strategy="afterInteractive"
        />
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
