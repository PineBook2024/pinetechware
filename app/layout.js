import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./utils/LenisProvider";
import { PopupProvider } from "@/context/PopupContext";
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

        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=6ad75b0f-d085-4cae-9a7a-48abeb69b973"
          strategy="afterInteractive"
        />

        <Script id="zendesk-chat-show" strategy="afterInteractive">
          {`
            (function () {
              if (window.innerWidth < 768) return;

              var checkZendesk = window.setInterval(function () {
                if (typeof window.$zopim !== "undefined" && window.$zopim.livechat) {
                  window.$zopim.livechat.window.show();
                  window.clearInterval(checkZendesk);
                }
              }, 1000);
            })();
          `}
        </Script>

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
